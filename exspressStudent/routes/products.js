let express = require('express');
let router = express.Router();

let cProducts = require("../controller/productsController")

//создать новую запись === POST
router.post("/", cProducts.create)

//read All === GET, корень
router.get("/", cProducts.index)

//read (one) === GET, на параметр
router.get("/:productsId", cProducts.show)

//update
router.put("/:productsId", cProducts.update)

//DELETE
router.delete("/:productsId", cProducts.delete)


//CRUD
module.exports = router;