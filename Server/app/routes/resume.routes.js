const express = require('express')


const User = require('../models/user.model')
const Resume = require('../models/resume.model')

const router = express.Router();

///// Add New Resume to User Account /////
router.post('/resume', (req, res) => {

    let user;
  // find a user based on the token 
  User.findOne({
            token: req.headers.token
        })
        .then(record => {
            if (!record) {
                throw new BadCredentialsError()
            }
            user = record
        });

// Create a new resume
    Resume.create(req.body)
        .then((newResume) => {
            user.resume.push(newResume._id)
            user.save()
            res.status(201).json({
                "newResume": newResume
            });
        })
// Catch any errors that might occur
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
});





module.exports = router