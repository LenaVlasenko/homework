let express = require('express');
let router = express.Router();

let cStudents = require("./../controllers/studentsController")


router.get("/", cStudents.index)

module.exports = router;