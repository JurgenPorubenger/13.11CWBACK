const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



const likesSchema = new mongoose.Schema({
        userID:[{
                type: Schema.Types.ObjectId,
                ref: 'UserSchema',
                required: true
        }],
        articleID: [{
                type: Schema.Types.ObjectId,
                ref: 'ArticleSchema',
                required: true
        }],

});

// userSchema.methods.setPassword = async function(password) {
//         let saltRound = 10;
//         try {
//                 let a = await bcrypt.genSalt(saltRound);
//                 return await bcrypt.hash(password, a);
//         } catch (e) {
//                 return e;
//         }
// };


const Model = mongoose.model('LikesSchema', likesSchema);
module.exports = Model;