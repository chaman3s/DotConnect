const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id/follow', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);
        if (!user.followers.includes(req.user.id)) {
            user.followers.push(req.user.id);
            currentUser.following.push(req.params.id);
            await user.save();
            await currentUser.save();
            res.json({ message: 'User followed' });
        } else {
            res.status(400).json({ message: 'Already following' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id/unfollow', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);
        if (user.followers.includes(req.user.id)) {
            user.followers.pull(req.user.id);
            currentUser.following.pull(req.params.id);
            await user.save();
            await currentUser.save();
            res.json({ message: 'User unfollowed' });
        } else {
            res.status(400).json({ message: 'Not following' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
