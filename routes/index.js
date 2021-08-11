var express = require('express');
var router = express.Router();

const {home, search} = require('../controllers/indexController');
const {index,products} = require('../controllers/adminController');

/* GET home page. */
router.get('/', home);
router.get('/search',search);
router.get('/admin',index);
router.get('/admin/products',products)

module.exports = router;
