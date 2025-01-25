const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
// login user

const createSecret = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'2d'})
}
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    
    try{
        const user = await User.login(email,password);

        const token = createSecret(user._id);

        res.status(200).json({email,token})
    }catch(error){
        console.log(error.message)
        res.status(400).json({error:error.message})
    }
}

// signup user
const signupUser = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.signup(email,password);
        const token = createSecret(user._id);
        res.status(200).json({email,token});
    }catch(err){
        console.log(err.message);
        res.status(400).json({error:err.message});
    }
}


module.exports = {loginUser,signupUser};