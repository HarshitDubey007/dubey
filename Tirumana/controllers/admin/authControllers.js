const User = require('../models/user')
const jwt = require('jsonwebtoken')



exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message: 'user already registered'
        })
        
        const { username, email, password, mobileNo, gender } = req.body;
        const _user = new User({
            username, 
            email, 
            password, 
            mobileNo, 
            gender
        })
        _user.save((error, data) => {
            console.log(_user)
            if(error){
                return res.status(400).json({
                    message: 'Somthing went wrong'
                })
            }
            if(data){
                return res.status(201).json({
                    message: 'user created successfully'
                })
            }
        })
    })
}


exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password)){
                console.log(req.body)
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'})
                    const { _id, username, email, mobileNo, gender } = user;
                    res.status(400).json({
                        token,
                        user: {
                            _id, username, email, mobileNo, gender
                        }
                    })
            } else {
                return res.status(400).json({
                    message: 'Invalide username and password'
                })
            }
        } else {
            return res.status(400).json({
                message: 'Somthing went wrong'
            })
        }
    })
}

exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    console.log(token)
    next();
}