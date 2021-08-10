const fs = require('fs');
const path = require('path');
const autos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','autos_db.json'),'utf-8'))

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
            title : "Agregar auto"
        })
    },
    store : (req,res) => {

    },
    edit : (req,res) => {

    },
    update : (req,res) => {

    },
    destroy : (req,res) => {

    }
}