let express = require("express");
let router = express.Router();
const controller = require("../controllers/contact");


router.get("/", controller.contact);

module.exports = router;
