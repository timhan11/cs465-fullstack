let express = require("express");
let router = express.Router();

/* GET home page. */
const ctrlMain = require("../controllers/main");

router.get("/", ctrlMain.index);

module.exports = router;
