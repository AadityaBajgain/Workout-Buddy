const express = require('express');

const router = express.Router();


// import controllers functions

const {loginUser,signupUser} = require('../controllers/userController')


// login route

router.post('/login',loginUser)

// sign up route

router.post('/signup',signupUser)


module.exports = router