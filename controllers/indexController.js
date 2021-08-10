const fs = require('fs');
const path = require('path');
const autos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','autos_db.json'),'utf-8'))

module.exports = {
    home : (req,res) => {
        return res.render('index',{
            title : "Mercado Autos"
        })
    },
    search : (req,res) => {
        return res.render('productList',{
            autos : autos.filter(auto => auto.modelo.toLowerCase().includes(req.query.busqueda.toLowerCase().trim())),
            title: "Resultado de la búsqueda"
        })
    }
}