const router = require("express").Router();
const chadRoutes = require("./chadAPI");

// Chad routes /api/chads
router.use("/chads", chadRoutes);


module.exports = router;
