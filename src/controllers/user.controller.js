const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
const fetch = require("node-fetch");
const yup = require("yup");

const create = async (req, res) => {
  try {
    const user = await userService.create(req?.body);

    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  create,
};
