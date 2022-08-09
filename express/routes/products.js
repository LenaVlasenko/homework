let express = require('express');
let router = express.Router();
//получить модуть управления продуктами
let cProducts = require("./../controllers/productsController")

//назначить маршрут в корень метод
router.get("/", cProducts.index)

// - каждой операции свой метод и маршрут

module.exports = router;