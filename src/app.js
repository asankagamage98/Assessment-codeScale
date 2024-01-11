require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require('./utils/dbConnection');
const bodyparser = require("body-parser");

// const userRouter = require("./routes/user.router");

App = express();

App.use(cors());
App.use(bodyparser.json());

// App.use("/api/user", userRouter);

const PORT = process.env.PORT;

App.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
    dbConnect();
});