const {create,locationUpdate,getUserByWeatherDate,getAllUsers} = require("../controllers/user.controller");
const { login,validateToken } = require("../services/auth.service");

const router = require("express").Router();

//api helth check
router.get("/hello", (req, res) => {
    let cars = [
        { id: 1, name: "BMW" },
        { id: 2, name: "Audi" },
        { id: 3, name: "Ferrari" },
      ];
    
    //   res.json();
    res.json(cars).status(200);
})

//athenticate the routes from  jwt athentication
//login route
router.post("/login", login);
// Route to create a new user
router.post("/create",validateToken, create);
// Route to update user location by ID
router.put("/update/location/:id",validateToken, locationUpdate);
// Route to get user details based on weather date
router.get("/whether/:date",validateToken, getUserByWeatherDate);
//Route to get all user details
router.get("/", getAllUsers);

module.exports = router;
