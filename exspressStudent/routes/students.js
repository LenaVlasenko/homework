let express = require('express');
let router = express.Router();

let cStudents = require("../controller/studentController_array2")

//создать новую запись === POST
router.post("/", cStudents.create)

//read All === GET, корень
router.get("/", cStudents.index)

//read (one) === GET, на параметр
router.get("/:studentId", cStudents.show)

//update
router.put("/:studentId", cStudents.update)

//DELETE
router.delete("/:studentId", cStudents.delete)


//CRUD
module.exports = router;