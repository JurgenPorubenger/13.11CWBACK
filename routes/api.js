const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const UserModel = require('../models/userModel');
const {userSaveController} = require("../controllers/userSaveController");
const {slashGetController} = require("../controllers/slashGetController");


router.get('/', slashGetController);





router.post('/addPost', async function(req, res, next) {
    const{email,password}=req.body;
    await userSaveController()
});




router.post('/login', async function(req, res, next) {
    console.log(req.body);
    const{email,password}=req.body;

    const userExist = await UserModel.findOne({email});
    if(!userExist) return res.status(400).send('Email was not found, try again');

    const validPassword = await bcrypt.compare(password, userExist.password);
    if(!validPassword) return res.status(400).send('Invalid password');

    const token = jwt.sign({_id: userExist.id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json(token);
});

module.exports = router;


