const CommentModel = require('../model/userModel');

module.exports.userSaveController=async (req,res)=> {
    const{firstName, email, password} = req.body;

    const user = new UserModel({
        firstName: firstName,
        email: email,
    });

    user.password = await user.setPassword(password);

    const emailExist = await UserModel.findOne({email});
    if(emailExist) return res.status(400).send('Email already exist');

    try {
        const savedUser = await user.save();
        await res.send(savedUser);
    }catch (e) {
        res.status(400).send(e);
    }
};