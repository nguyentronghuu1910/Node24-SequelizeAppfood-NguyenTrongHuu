const sequelize = require("../models/index");
const init_models = require("../models/init-models");

const model = init_models(sequelize);

const getFood = async (req, res) => {
  // include = join
  //   belongtomanys có thể link qua thẳng trực tiếp không cần thông qua bảng thứ 3 N-N
  //   let result = await model.food.findAll({include:'type'});
  let result = await model.like_res.findAll({ include: ["re", "user"] });
  res.send(result);
};

const postImg = (req, res) => {
  console.log(req.file.path);
  res.send("Success!");
};

module.exports = { getFood, postImg };
