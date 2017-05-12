const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../database/database');
const Job = require('../models/job');

// Register
router.post('/createjob', (req, res, next) => {
  let newJob = new Job({
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
    minexperience: req.body.minexperience,
    maxexperience: req.body.maxexperience,
    skills : req.body.skills
  });

  Job.addJob(newJob, (err, job) => {
    if(err){
      res.json({success: false, msg:'Failed to create job'});
    } else {
      res.json({success: true, msg:'Job Created'});
    }
  });
});

router.get('/login', (req, res, next) => {
    res.send('Login');
});

module.exports = router;