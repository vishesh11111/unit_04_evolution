const express = require("express");
const router = express();

const UserContr = require("./controllers/user.controller");
const todoController = require("./controllers/todo.controller");
const {register , login} = require("./controllers/auth.controller");
// const { route } = require("./controllers/user.controller");
router.use(express.json());


router.post("/login", login);
router.post("/register", register);
router.use("/users", UserContr);
router.use("/todos",todoController);

module.exports = router;