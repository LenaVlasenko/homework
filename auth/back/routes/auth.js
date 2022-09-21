//методы для прокладки дороги
let express = require('express');
let router = express.Router();

//ссылка на того - к кому прокладываем дорогу
let controller = require("./../controller/AuthController");


//правила как отвечать тому кто пришел
router.post("/register", controller.register)

//подготовится к подключению к общей сети дорог
module.exports = router;