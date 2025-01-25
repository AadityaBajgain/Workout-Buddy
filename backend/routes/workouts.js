const express = require('express');
const {createWorkout,getSingleWorkout,allWorkouts,deleteWorkout, updateWorkout} = require('../controllers/workoutControllers')
const router = express.Router();


// getting all work outs
router.get('/',allWorkouts)

// getting single workouts
router.get('/:id',getSingleWorkout)

// post new workouts
router.post('/', createWorkout)

// delete a workouts
router.delete('/:id',deleteWorkout)
// updata workout
// (put completely replaces the current value and updates the data, where as patch updates the current data by changing some chunk of the current data)
router.patch('/:id',updateWorkout)


module.exports = router;