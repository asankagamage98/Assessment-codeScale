const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, //vlidate email
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
      date: String,
      location: String,
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
