const mongoose = require('mongoose');
const {Schema, mode} = mongoose;


const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
},{
    timestamps: true,
});

const PostModel = model('Post', PostSchema);
 module.exports = PostModel;