require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/utils/dbConnection");
const bodyParser = require("body-parser");

const userRouter = require("./src/routes/user.router");

app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Asanka Gamage - Codescale Assessment Service");
});

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  dbConnect();
  // require("./src/utils/scheduler.util")();
});

