const fs = require('fs');
const path = require('path');
const autos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','autos_db.json'),'utf-8'));
const colores = require('../data/colores.json');

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const guardar = (data) => fs.writeFileSync(path.join(__dirname,'..','data','autos_db.json'),JSON.stringify(data,null,2),'utf-8')


module.exports = {
    list : (req,res) => {
        return res.render('productList',{
            autos,
            title: "Todos los autos"
        })
    },
    detail : (req,res) => {
        return res.render('productDetail',{
            auto: autos.find(auto => auto.id === +req.params.id),
            title: "Vista de detalle"
        })
    },
    add : (req,res) => {
        return res.render('admin/productAdd',{
            colores : colores.sort(),
            capitalizarPrimeraLetra,
            title : "Agregar auto"
        })
    },
    store : (req,res) => {
       const {marca,modelo,fecha,precio,patente,km,color,cuotas} = req.body;
       let anio = new Date(fecha);
       let auto ={
            id : autos[autos.length -1].id + 1,
            marca : marca.trim(),
            modelo : modelo.trim(),
            imagen : req.file ? req.file.filename: 'default-image.png',
            precio : +precio,
            km:+km,
            color,
            cuotas: +cuotas,
            anio : anio.getFullYear(),
            patente : patente.trim(),
            vendido :false
        }
        autos.push(auto);
        guardar(autos);
        res.redirect('/admin/products')

    },
    edit : (req,res) => {
        return res.render('admin/productEdit',{
            auto : autos.find(auto => auto.id === +req.params.id),
            colores: colores.sort(),
            capitalizarPrimeraLetra,
        })
    },
    update : (req,res) => {
        const {marca,modelo,anio,precio,patente,km,color,cuotas,vendido} = req.body;
        autos.map(auto => {
            if(auto.id === +req.params.id){
                auto.marca = marca.trim(),
                auto.modelo = modelo.trim(),
                auto.imagen = req.file ? req.file.filename : auto.imagen,
                auto.precio = +precio,
                auto.km = +km,
                auto.color = color,
                auto.cuotas = +cuotas,
                auto.anio = +anio,
                auto.patente = patente.trim(),
                auto.vendido = vendido ? true : false
            }
        })
        guardar(autos);
        res.redirect('/admin/products')
    },
    destroy : (req,res) => {
        let autosModificados = autos.filter(auto => auto.id !== +req.params.id);
        guardar(autosModificados)
        res.redirect('/admin/products')
    },
}