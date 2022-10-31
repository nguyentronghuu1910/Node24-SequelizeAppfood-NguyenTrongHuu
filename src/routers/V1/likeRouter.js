const express = require("express");
const likeController = require("../../controllers/likeController");

const likeRouter = express.Router();

likeRouter.get("/getLikeList", likeController.getLikeList);

likeRouter.get("/getLikeList/:user_id", likeController.getLikeListById);

likeRouter.post("/postLikeAndUnlike", likeController.like);

module.exports = likeRouter;
