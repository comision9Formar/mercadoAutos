module.exports = {
    index : (req,res) => {
        return res.render('admin/index',{
            title : "Administración"
        })
    }
}