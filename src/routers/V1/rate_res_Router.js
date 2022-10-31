const express = require("express");
const rate_res_Controller = require("../../controllers/rate_res_Controller");

const rate_res_Router = express.Router();

rate_res_Router.post("/postRate", rate_res_Controller.postRate);

rate_res_Router.get("/getRateList", rate_res_Controller.getRateResList);

rate_res_Router.get(
  "/getRateList/:user_id",
  rate_res_Controller.getRateResListById
);

module.exports = rate_res_Router;
