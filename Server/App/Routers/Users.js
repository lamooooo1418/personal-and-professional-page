const express = require("express");

//instate
const User = require("../models/User");
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

router.patch("/api/Users/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (user) {
        // Pass the result of Mongoose's `.update` method to the next `.then`
        res.status(201).json({ user });
        return user.update(req.body.user);
      } else {
        // If we couldn't find a document with the matching ID
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provided ID Doesn't match any documents"
          }
        });
      }
    })
    .then(() => {
      // If the deletion succeeded, return 204 and no JSON
      res.status(204).end();
    })
    // Catch any errors that might occur
    .catch(error => {
      res.status(500).json({ error: error });
    });
});
