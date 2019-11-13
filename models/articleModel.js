const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



const articleSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true,
                min: 6,
                max: 64
        },
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
        commentID: [{
                type: Schema.Types.ObjectId,
                ref: 'CommentSchema',
                required: true
        }],
        published: Boolean,

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


const Model = mongoose.model('ArticleSchema', articleSchema);
module.exports = Model;