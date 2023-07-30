//mdoles/Post.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    fileName: {
        type: String,
    },
    altImageName: {
        type: String,
    },
}, 
    { timestamps: true }
);

let Post = mongoose.model('Post', postSchema);
module.exports = Post;