require("dotenv").config();

const express = require("express");
const app = express();
const userRouters = require("./routes/UserRoute");
const sequelize = require("./database");
var cors = require("cors");
//server ayarları
const PORT = process.env.PORT || 5000;

sequelize.sync();

app.use(express.json());
app.use(cors());


// importing route
app.use("/user", userRouters);

app.listen(PORT, () => {
  console.log(`Starting server in ${PORT}`); //serverı 5000 portunda başlatma
});
