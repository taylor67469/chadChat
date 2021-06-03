const router = require("express").Router();
const empController = require("../../controllers/chadController")
router.route("/")
    .get(empController.findAllEmp)


module.exports = router;