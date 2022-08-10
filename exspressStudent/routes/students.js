let express = require('express');
let router = express.Router();

let cStudents = require("./../controller/studentController")

//создать новую запись === POST
router.post("/", cStudents.create)

//GET
router.get("/", cStudents.index)

module.exports = router;