//методы для прокладки дороги
let express = require('express');
let router = express.Router();

//ссылка на того - к кому прокладываем дорогу
let cContact = require("./../controller/contactController");


//правила как отвечать тому кто пришел
router.post("/", cContact.create)

//подготовится к подключению к общей сети дорог
module.exports = router;