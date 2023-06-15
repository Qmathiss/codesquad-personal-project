const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
router.route("/").get(adminController.admin_console);
router.route("/create-herbal").get(adminController.create_herbal);
router.route("/update-herbal/:id").get(adminController.update_herbal);

module.exports = router;