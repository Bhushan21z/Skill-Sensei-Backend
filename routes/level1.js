var express = require("express");
var router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/", async function (req, res, next) {
  const { email } = req.body;
  const level = 2;
  const game1=[1,100,10]
  let data = { state: "Success", level: level };

  // ---------------------------------------

  User.findOneAndUpdate (email, {level: level, game1: game1}, function (err, docs) {
    if (err) {
        console.log(err);
    } else {
      console.log("Updated User : ", docs);
    }
  });

  // ---------------------------------------
  return res.json(data);

});

module.exports = router;
