const express = require("express");

// connecting

const usrController = require("./controllers/user.controller");
const savingController = require("./controllers/saving.controller");
const masterController = require("./controllers/master.controller");
const fixedController = require("./controllers/fixed.controller");
const branchController = require("./controllers/branch.controller");

const router = express();
router.use(express.json());

router.use("/users",usrController);
router.use("/saving",savingController);
router.use("/masterCard",masterController);
router.use("/fixed",fixedController);
router.use("/branch",branchController);

module.exports = router;