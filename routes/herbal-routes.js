const express = require("express");
const herbalController = require("../controllers/herbal-controller");
const router = express.Router();

router.route("/")
.post(herbalController.update);

router.route("/").post(herbalController.create).get(herbalController.create_form);

module.exports = router;