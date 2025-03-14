const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// static signup method
userSchema.statics.signup = async function (email, password){

    // validation
    if (!email || !password){
        throw Error('All field must be filled')
    }
    if (!validator.isEmail(email)){
        throw Error('Invalid Email');
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough!!');
    }


    const exists = await this.findOne({ email }); // Use 'this' for model
    if (exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });
    return user;
};

// static login method

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error("All the fields are required")
    }

    const user =await this.findOne({email});
    if(!user){
        throw Error('Incorrect Email')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error("Incorrect Password")
    }
    return user;
}

module.exports = mongoose.model('User', userSchema);

