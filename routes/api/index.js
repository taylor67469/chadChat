const router = require("express").Router();
const empRoutes = require("./empApi");

// Employee routes /api/employees
router.use("/employees", empRoutes);


module.exports = router;
