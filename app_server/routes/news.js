let express = require("express");
let router = express.Router();
const controller = require("../controllers/news");

/* GET news page. */
router.get("/", controller.news);

module.exports = router;
