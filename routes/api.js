const express = require('express')
let router = express.Router()
let DB = require('../models')

// GET method route
router.get('/api', function(req, res) {
    res.send('GET request to the homepage')
})


router.put('/api/workouts/:id', function(req, res) {
    DB.ExerciseModel.create(req.body)
    console.log(req.body)
    res.json({})
});

router.post('/api/workouts', function(req, res) {
    console.log(req.body)
    res.send('Successfully Added')
});

module.exports = router