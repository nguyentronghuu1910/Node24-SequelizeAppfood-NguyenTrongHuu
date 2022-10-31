const express = require("express");
const app = express();
//
const cors = require("cors");
app.use(cors());
//middleware
app.use(express.json());

app.use(express.static("."));

app.listen(8080, () => {});

// nodemon : tự động restart lại server khi lưu code
// yarn start or npm start

// method GET:  Read
// localhost:8080/hello
// domain:80?title=node => khai báo từ FE get query dữ liệu từ url

//?     /:id => khai báo API get params từ url
// app.get("/getParams/:id", (req, res) => {
//   // req.parms.id chấm biến trên đường dẫn
//   let { id } = req.params;
//   res.send(id);
// });

// app.get("/getQuery", (req, res) => {
//   // req.query là bên phía FE tự lọc trên đường dẫn = dấu /getQuery?user=1&id=2
//   console.log(req.query);
//   res.send(req.query);
// });

// app.get("/getReqBody", (req, res) => {
//   // req.body lấy dữ liệu từ FE truyền lên bằng json
//   console.log(req.body);
//   res.send(req.body);
// });

// const mysql = require("mysql2");

// // conn hàm để kêt nối đến DB
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "db_food",
//   port: 3306,
// });

// app.get("/getFood", (req, res) => {
//   let sql = "SELECT * FROM food";
//   //? cách 1 call back function
//   conn.query(sql, (err, result) => {
//     res.send(result);
//   });
// });

// app.get("/getFood/:food_id", async (req, res) => {
//   //? cách 2 sử dụng async await
//   let { food_id } = req.params;
//   let sql = `SELECT * FROM food WHERE food_id = ${food_id}`;
//   let result = await conn.promise().query(sql);
//   res.send(result[0]);
// });

const rootRouter = require("./routers/index");
app.use("/api", rootRouter);
