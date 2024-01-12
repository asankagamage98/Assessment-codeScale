// const { default: mongoose } = require("mongoose");

// const url = process.env.MONGODB_URL;
// const dbConnect = () => {
//   mongoose.connect(url);
//   console.info("db connection is working successfully");
// };

// module.exports = {
//   dbConnect,
// };



const { default: mongoose } = require("mongoose");

const url = process.env.MONGODB_URL;

const dbConnect = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  db.once("open", () => {
    console.info("MongoDB connection is successful");
  });
};

module.exports = {
  dbConnect,
};
