require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./utils/dbConnection");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user.router");

app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  dbConnect();
});
