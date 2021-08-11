const fs = require('fs');
const path = require('path');
const autos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','autos_db.json'),'utf-8'))

module.exports = {
    index : (req,res) => {
        return res.render('admin/index',{
            title : "Administración"
        })
    },
    products : (req,res) => {
        
        return res.render('admin/productsTable',{
            autos : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','autos_db.json'),'utf-8')),
            title: "Todos los autos"
        })
    },
}