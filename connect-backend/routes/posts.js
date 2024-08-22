const express = require('express');
const multer = require('multer');
const Post = require('../models/Post');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const { content } = req.body;
        const newPost = new Post({
            user: req.user.id,
            content,
            image: req.file ? req.file.path : '',
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username profilePicture');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id/like', authMiddleware, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.likes.includes(req.user.id)) {
            return res.status(400).json({ message: 'Already liked' });
        }
        post.likes.push(req.user.id);
        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id/comment', authMiddleware, async (req, res) => {
    try {
        const { text } = req.body;
        const post = await Post.findById(req.params.id);
        const comment = {
            user: req.user.id,
            text,
            createdAt: new Date(),
        };
        post.comments.push(comment);
        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
