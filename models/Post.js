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
    fileName: {
        type: String,
    },
    alt: {
        type: String,
    },
    slug: {
        type: String,
    },
    category: {
        type: String,
    },
    categorySlug: {
        type: String,
    },
    photographer: {
        type: String,
    },
    photographerUrl: {
        type: String,
    },
    
}, 
    { timestamps: true }
);

let Post = mongoose.model('Post', postSchema);
module.exports = Post;