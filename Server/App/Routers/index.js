//Require
const express = require("express");
//const mongoose = require('mongoose');

//Export Router and initalize it (mini app that handele)
const router = express.Router();

/*
Action:        INDEX
Method:  Get 
URI:  / 
*Description : Get the root Route
*/
router.get("/", (req, res) => {
  res.json({
    messege: "Welcome to personl"
  });
});

module.exports = router;
