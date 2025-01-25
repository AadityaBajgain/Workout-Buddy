require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoute = require('./routes/workouts.js');
const userRoute = require('./routes/user.js');
const mongooseURL = process.env.mongoo_URL;


mongoose.connect(mongooseURL)
    .then(()=>{
        console.log('connected to mongo db')
        app.listen(process.env.PORT,()=>{
            console.log('listening to the port',process.env.PORT)
        })
    })
    .catch(err=>console.log('error connecting to mongodb:', err))

// express app
const app = express();

// cors
app.use(cors())
// middle ware
app.use(express.json())
// app.use((req,res,next)=>{
//     // console.log(req.url,req.method, req.path);
//     next();
// });

// routes
app.use('/api/workouts',workoutRoute)
app.use('/api/user',userRoute)
