const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const Sequelize = require("sequelize");

const model = init_models(sequelize);
const { errorCode, failCode, successCode } = require("../utils/reponse");

let postRate = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    let newRate = {
      user_id,
      res_id,
      amount,
    };
    let result = await model.rate_res.create(newRate);
    successCode(res, result, "Success!");
  } catch (error) {
    errorCode(error, "Back end error");
  }
};

const getRateResList = async (req, res) => {
  try {
    let result = await model.rate_res.findAll({ include: ["re", "user"] });
    successCode(res, result, "Success!");
  } catch (error) {
    errorCode(res, "Back-end error");
  }
};

const getRateResListById = async (req, res) => {
  try {
    let { user_id } = req.params;
    let result = await model.rate_res.findOne({ where: { user_id } });
    successCode(res, result, "Success!");
  } catch (error) {
    errorCode(res, "Back end error");
  }
};

module.exports = { postRate, getRateResList, getRateResListById };
