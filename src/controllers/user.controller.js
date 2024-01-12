const userService = require("../services/user.service");

 // Create a new user 
const create = async (req, res) => {
  try {
    const user = await userService.create(req?.body);

    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update user location
const locationUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.update(id, {
      location: req?.body?.location,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get weather from given date
const getUserByWeatherDate = async (req, res) => {
  try {
    const date = req.params.date;

    const user = await userService.getUserByWeatherDate(date);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error retrieving user details:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting all users:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



module.exports = {
  create,
  locationUpdate,
  getUserByWeatherDate,
  getAllUsers
};
