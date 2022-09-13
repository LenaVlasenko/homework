let express = require('express');
let router = express.Router();

let cUser = require("../controllers/userController")

//создать новую запись === POST
router.post("/", cUser.create)

module.exports = router;