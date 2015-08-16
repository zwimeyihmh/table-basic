var express = require('express');
var router = express.Router();
var Controller = require('../controller/main.js');
/* GET home page. */
var controller = new Controller();
router.get('/',controller.getManage);

module.exports = router;
