let express = require('express');
let router = express.Router();

let cStudents = require("./../controller/studentController")


router.get("/", cStudents.index)

module.exports = router;