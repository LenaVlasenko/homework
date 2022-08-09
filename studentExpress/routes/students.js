let express = require('express');
let router = express.Router();

let cStudents = require("./../controller/studentsController")

//read
router.get("/", cStudents.index)

module.exports = router;

//CRUD