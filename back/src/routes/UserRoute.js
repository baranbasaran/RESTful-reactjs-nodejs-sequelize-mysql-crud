const { Router } = require("express");
const router = Router();

const UserController = require("../controllers/UserController");
//middlewares
router.post("/create", UserController.createUser);
router.get("/getallusers", UserController.getAllUsers);
router.get("/get/:id", UserController.getUserById);
router.put("/update/:id", UserController.updateUser);
router.post("/delete", UserController.deleteUserById);

module.exports = router;
