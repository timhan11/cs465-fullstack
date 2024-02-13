let express = require("express");
let router = express.Router();
const controller = require("../controllers/contact");

/* GET contact page. */
router.get("/", controller.contact);

module.exports = router;
