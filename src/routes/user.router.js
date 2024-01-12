const {create,locationUpdate,getUserByWeatherDate,getAllUsers} = require("../controllers/user.controller");

const router = require("express").Router();

// Route to create a new user
router.post("/create", create);
// Route to update user location by ID
router.put("/update/location/:id", locationUpdate);
// Route to get user details based on weather date
router.get("/whether/:date", getUserByWeatherDate);
//Route to get all user details
router.get("/getUsers",getAllUsers);

module.exports = router;
