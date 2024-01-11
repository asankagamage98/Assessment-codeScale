const { default: mongoose } = require("mongoose");

const url = process.env.MONGODB_URL;
const dbConnect = () => {
  mongoose.connect(url);
  console.log("db connection is working successfully");
};

module.exports = {
  dbConnect,
};
