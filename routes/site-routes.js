const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site-controller");
router.route("/index").get(siteController.index);
router.route("/about").get(siteController.about);
router.route("/book").get(siteController.book);
router.route("/herbals").get(siteController.herbals);
router.route("/login")
    .get(siteController.login)
    .post(siteController.login_post);

    router.route("/register")
    .get(siteController.register)
    .post(siteController.register_post);
module.exports = router;
