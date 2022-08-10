let express = require('express');
let router = express.Router();

//получить модуль управления прдуктами
let cStudents = require("./../controllers/studentsController")

//READ (ALL) === GET
router.get("/", cStudents.index)

//CRUD


module.exports = router;