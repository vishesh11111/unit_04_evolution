const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// GenToken

const GenToken = (user)=>{
    return jwt.sign({user}, process.env.secret);
}
//Register
const register = async (req, res) => {
    try {

        let user = await User.findOne({email: req.body.email});

        if(user){
            return res.status(400).send({email: "EMail already"});
        }

        user = await User.create(req.body);

        const token = GenToken(user);
        return res.status(200).send({user, token});

    } catch (error) {

        return res.status(500).send({msg: error.msg});

    }
}


// Login
const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(400).send("wrong Email or password");
        }
        
    const match = user.checkPassword(req.body.password);
    if(!match){
        return res.status(400).send({msg :"worng password or email"});

    }
    
    const token = GenToken(user); 
    return res.status(200).send({user, token});

    } catch (error) {

        return res.status(500).send({msg: error.msg});
    }

}


module.exports = {register,login};