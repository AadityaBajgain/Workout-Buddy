const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose');

// get all workouts
const allWorkouts = async (req,res)=>{
    try{
    const workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
    }catch(error){
        console.log(error.message);
        res.status(400).json({error:error.message})
    }
};

// get single workout
const getSingleWorkout = async(req,res)=>{
    try{  
        const {id} = req.params;
        const workout = await Workout.findById(id);
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error:error.message})
        console.log(error.message);
    }

}

// create new workout
const createWorkout = async (req,res)=>{
    const {title,reps,load} = req.body;
    // add doc to db
    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a workout

const deleteWorkout = async (req,res)=>{
    const {id} =  req.params;
    if(mongoose.Types.ObjectId.isValid(id))
    {
        await Workout.findByIdAndDelete(id);
        res.status(200).json('Deleted successfully !')
    }else{
        res.status(400).json({error:err.message})
        console.log(err)
    }

}


// update a workout
const updateWorkout = async (req,res)=>{
    const {id} = req.params;
    const {title,reps,load} = req.body;
    try{
        const updatedData  = await Workout.findByIdAndUpdate(id,{title,reps,load},{new:true});
        if(!updatedData){
            return res.status(404).json({ message: "Workout not found" });
        }
        res.status(200).json(updatedData);
    }catch(err){
        console.log(err.message);
        res.status(400).json({error:err.messsage})
    }
}

module.exports = {
    createWorkout,
    allWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
};