const express = require("express");
const router = express.Router();
const herbalController = require("../controllers/herbal-controller");

router.route("/")
    .get(herbalController.herbal)
    .post(herbalController.create_form)
    
router.route("/create")
.get(herbalController.create_form)   

  

module.exports = router;
