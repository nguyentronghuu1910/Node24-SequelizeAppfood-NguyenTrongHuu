const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const Sequelize = require("sequelize");

const model = init_models(sequelize);
const { errorCode, failCode, successCode } = require("../utils/reponse");

const createOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let newOrder = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };
    let result = await model.order.create(newOrder);
    successCode(res, result, "Success!");
  } catch (error) {
    errorCode(res, error);
  }
};

module.exports = { createOrder };
