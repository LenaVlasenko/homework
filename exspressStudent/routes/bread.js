
//методы для прокладки дороги
let express = require('express');
let router = express.Router();

//ссылка на того - к кому прокладываем дорогу
let cBread = require("./../controller/breadController");


//правила как отвечать тому кто пришел
router.get("/", cBread.index)

//подготовится к подключению к общей сети дорог
module.exports = router;