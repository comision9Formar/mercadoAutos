var express = require('express');
const path = require('path');
var router = express.Router();

const multer = require('multer');

const {list,add,detail,store,edit,update,destroy} = require('../controllers/productsController');


const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/autos')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
})

/* GET home page. */
router.get('/list', list);
router.get('/detail/:id',detail);
router.get('/add',add);
router.post('/add',upload.single('imagen'), store);
router.get('/edit/:id',edit);
router.put('/edit/:id',upload.single('imagen'), update);
router.delete('/delete/:id',destroy);


module.exports = router;
