const express = require("express");

//instate
const Article = require("../models/User");
const router = express.Router();
/*
*Action :   INDEX
*Method :      GET
*URI:           /api/atricles
*Description :    Get All Articls

*/
router.get("/api/Users", (req, res) => {
  User.find()
    .then(Users => {
      res.status(200).json({ Users: Users });
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});





router.post("/api/Users", (req, res) => {
    User.create(req.body.User)
  
      .then(newUser => {
        res.status(201).json({ User: newUser });
      })
      .catch(error => {
        res.status(500).json({ error: error });
      });
  
  });