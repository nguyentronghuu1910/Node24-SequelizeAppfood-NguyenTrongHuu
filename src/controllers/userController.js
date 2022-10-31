const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const Sequelize = require("sequelize");

const model = init_models(sequelize);
const { errorCode, failCode, successCode } = require("../utils/reponse");

const Op = Sequelize.Op;

const getUser = async (req, res) => {
  //? find all => SELECT * FROM tabel
  let danhSachUser = await model.user.findAll();

  //?  findByPk() => lấy dữ liệu theo khóa chính
  // let danhSachUser = await User.findByPk(2); trả về 1 đối tượng
  // let danhSachUser = await User.findAll({ where: { user_id: 2 } }) trả về 1 mảng đối tượng
  // let danhSachUser = await User.findOne({ where: { user_id: 2 } }) //trả về 1 đối tượng theo điều kiện nào đó

  res.send(danhSachUser);
};

const postUser = async (req, res) => {
  let { email, full_name, pass_word } = req.body;
  try {
    let userNew = {
      full_name,
      email,
      pass_word,
    };

    let result = await model.user.create(userNew);
    successCode(res, result, "thêm dữ liệu thành công");
  } catch (error) {
    errorCode(res, "lỗi back end");
  }
};

const putUser = async (req, res) => {
  let { id } = req.params;
  let { email, full_name, pass_word } = req.body;
  try {
    let checkUser = await model.user.findByPk(id);

    if (checkUser) {
      let userUpdate = {
        full_name,
        email,
        pass_word,
      };

      await model.user.update(userUpdate, { where: { user_id: id } });
      successCode(res, "", "Update successful!");
    } else {
      failCode(res, "", "user_id does not exist");
    }
  } catch (error) {
    errorCode(res, "Back-end error");
  }
};

const removeUser = async (req, res) => {
  try {
    let { id } = req.params;
    let checkUser = await model.user.findByPk(id);

    if (checkUser) {
      await User.destroy({ where: { user_id: id } });
      successCode(res, "", "Deleted!");
    } else {
      failCode(res, "", "user_id does not exist");
    }
  } catch (error) {
    errorCode(res, "Back-end error");
  }
};

const searchUser = async (req, res) => {
  try {
    let result = await model.user.findAll({
      where: { full_name: { [Op.like]: "%o%" } },
    });
    successCode(res, result, "Had found");
  } catch (error) {
    errorCode(res, "Back-end error");
  }
};

module.exports = { getUser, postUser, putUser, removeUser, searchUser };
