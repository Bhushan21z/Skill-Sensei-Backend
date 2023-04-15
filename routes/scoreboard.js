var express = require("express");
var router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/", async function (req, res, next) {
  const { email } = req.body;

  User.findOne({ email: email })
    .then((docs) => {
      console.log("Result :", docs);
      return res.json(docs);
    })
    .catch((err) => {
      console.log(err);
    });

});

module.exports = router;
