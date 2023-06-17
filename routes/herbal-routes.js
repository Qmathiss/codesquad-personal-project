const express = require("express");
const herbalController = require("../controllers/herbal-controller");
const router = express.Router();
router.get("/edit/(:id)", herbalController.edit);
router.post("/update/(:id)", herbalController.update);
router.get("/herbals", herbalController.read);
router.post("/create", herbalController.create);
router.get("/admin", herbalController.read_admin);

router.get("/delete/(:id)", herbalController.delete), (module.exports = router);
