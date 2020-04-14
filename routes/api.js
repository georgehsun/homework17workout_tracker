const express = require('express')
let router = express.Router()
let DB = require('../models')

// GET method route
router.get('/api', function(req, res) {
    res.send('GET request to the homepage')
});

router.get('/api/workouts/:id', function(req, res) {
    DB.Exercise.find().then(function(data) {
        console.log(data)
        res.json(data)
    });
});

router.put('/api/workouts/:id', function(req, res) {
    console.log(req.body)
    const newWorkout = {
        day: new Date().setDate(new Date().getDate()),
        exercises: [req.body]
    }
    DB.Workout.collection.insert(newWorkout).then(function(data) {
        res.json({})
    }).catch(function(err) {
        console.log(err)
    })
});

router.post('/api/workouts', function(req, res) {
    console.log(req.body)
    res.send('Successfully Added')
});

module.exports = router

// router.put('/api/workouts/:id', function(req, res) {
//     //find workout with provided id and addd excrise from the req body to that workout
//     console.log(req.body)
//     res.json({})
// });

// router.post('/api/workouts', function(req, res) {
//     //find all workouts and return ordered by date
//     res.send('Successfully Added')
// });

// module.exports = router