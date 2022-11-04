//методы для прокладки дороги
let express = require('express');
let router = express.Router();

let fileControllers = require('./../controllers/api/files/FileController')

router.post('/file', fileControllers.getFile)


//подготовится к подключению к общей сети дорог
module.exports = router;