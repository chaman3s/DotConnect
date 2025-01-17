const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    image: String,
    video: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    }],
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
