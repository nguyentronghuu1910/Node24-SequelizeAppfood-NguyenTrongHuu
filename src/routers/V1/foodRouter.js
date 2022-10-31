const express = require("express");
const FoodController = require("../../controllers/foodController");

const foodRouter = express.Router();

foodRouter.get("/getFood", FoodController.getFood);

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(tham số đầu tiên là lỗi err , tham số thứ 2 là đường đẫn lưu hình vào folder)
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    const fileNewName = Date.now() + "_" + file.originalname;
    // cb(tham số thứ 1 là err , tham số thứ 2 đổi tên file)
    cb(null, fileNewName);
  },
});

const upload = multer({ storage });

foodRouter.post("/postImg", upload.single("upload"), FoodController.postImg);

module.exports = foodRouter;
