const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



const commentSchema = new mongoose.Schema({
        text: {
                type: String,
                required: true,
                min: 6,
                max: 1024
        },
        userID: [{
                type: Schema.Types.ObjectId,
                ref: 'UserSchema',
                required: true
        }],
        articleID: [{
                type: Schema.Types.ObjectId,
                ref: 'ArticleSchema',
                required: true
        }],
        date: {
                type: Date,
                default: Date.now
        }
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


const Model = mongoose.model('CommentSchema', commentSchema);
module.exports = Model;