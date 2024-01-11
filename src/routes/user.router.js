const { create } = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/create", create);

module.exports = router;
