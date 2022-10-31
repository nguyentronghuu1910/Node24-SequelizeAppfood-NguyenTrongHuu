const express = require("express");
const rootRouter = express.Router();

const userRouter = require("./V1/userRouter");

rootRouter.use("/user/v1", userRouter);

const foodRouter = require("./V1/foodRouter");

rootRouter.use("/food/v1", foodRouter);

const likeRouter = require("../routers/V1/likeRouter");

rootRouter.use("/like", likeRouter);

const rate_res_Router = require("../routers/V1/rate_res_Router");

rootRouter.use("/rateRes", rate_res_Router);

const orderRouter = require("../routers/V1/orderRouter");

rootRouter.use("/order", orderRouter);

module.exports = rootRouter;
