const { create, locationUpdate, getUserByWeatherDate } = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/create", create);
router.put("/update/location/:id", locationUpdate);
router.get("/whether/:date", getUserByWeatherDate)

module.exports = router;
