const router = require("express").Router();
const empController = require("../../controllers/empController")
router.route("/")
    .get(empController.findAllEmp)


module.exports = router;