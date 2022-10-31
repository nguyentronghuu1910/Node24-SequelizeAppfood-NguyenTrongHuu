const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const Sequelize = require("sequelize");

const model = init_models(sequelize);
const { errorCode, failCode, successCode } = require("../utils/reponse");

const Op = Sequelize.Op;

const getLikeList = async (req, res) => {
  try {
    let result = await model.like_res.findAll({ include: ["re", "user"] });
    successCode(res, result, "Success!");
  } catch (error) {
    errorCode(res, "Back-end error");
  }
};

const getLikeListById = async (req, res) => {
  try {
    let { user_id } = req.params;
    let result = await model.like_res.findOne({ where: { user_id } });
    successCode(res, result, "Success!");
  } catch (error) {
    errorCode(res, "Back-end error");
  }
};

const like = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let checkLikeReady = await model.like_res.findOne({
      where: { user_id, res_id },
    });
    console.log(checkLikeReady);
    if (!checkLikeReady) {
      let newLike = {
        user_id,
        res_id,
      };
      let result = await model.like_res.create(newLike);
      successCode(res, result, "Liked!");
    } else {
      let deleteLike = await model.like_res.destroy({
        where: { user_id, res_id },
      });
      successCode(res, deleteLike, "Unliked!");
    }
  } catch (error) {
    errorCode(res, "Back-end error");
  }
};

module.exports = { getLikeList, like, getLikeListById };
