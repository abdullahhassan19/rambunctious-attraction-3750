const express = require("express");
const app = express();
require("dotenv").config();
const { connection } = require("./Config/db");
// const { CoustomerModel } = require("./Routers/CoustomerModel");
// const {ProductRouter} = require("./Routers/ProductRouter")
const { UserRouter } = require("./Routers/UserRouter");
const { ProductRouter } = require("./Routers/ProductRouter");

const cors = require("cors");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use("/", UserRouter);
app.use("/", ProductRouter);
app.get("/", (req, res) => {
  req.send("HomePage");
});

app.listen(PORT, async () => {
  await connection;
  try {
    console.log("Connected to db");
  } catch {
    console.log("error in db");
  }
  console.log(`running on port ${PORT}`);
});
