const {
  create,
  locationUpdate,
  getUserByWeatherDate,
} = require("../controllers/user.controller");

const router = require("express").Router();

// Route to create a new user
router.post("/create", create);
// Route to update user location by ID
router.put("/update/location/:id", locationUpdate);
// Route to get user details based on weather date
router.get("/whether/:date", getUserByWeatherDate);

module.exports = router;
