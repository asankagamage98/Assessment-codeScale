const { Schema, default: mongoose, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  weatherData: [
    {
      temperature: Number,
      weatherCondition: String,
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
