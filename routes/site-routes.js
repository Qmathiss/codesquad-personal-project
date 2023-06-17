const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site-controller");
router.route("/index").get(siteController.index);
router.route("/about").get(siteController.about);
router.route("/book").get(siteController.book);
// router.route("/herbals").get(siteController.herbals);
module.exports = router;
