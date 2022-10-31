const express = require("express");
const userController = require("../../controllers/userController");

const userRouter = express.Router();

userRouter.get("/getUser", userController.getUser);

userRouter.post("/postUser", userController.postUser);

userRouter.put("/putUser/:id", userController.putUser);

userRouter.delete("/deleteUser/:id", userController.removeUser);

userRouter.get("/searchUser", userController.searchUser);

module.exports = userRouter;
