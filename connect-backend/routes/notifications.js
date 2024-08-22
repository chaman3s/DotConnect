const express = require('express');
const Notification = require('../models/Notification');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create a new notification
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { user, text } = req.body;
        const newNotification = new Notification({
            user,
            text,
        });
        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all notifications for a user
router.get('/', authMiddleware, async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Mark notification as read
router.put('/:id/read', authMiddleware, async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) return res.status(404).json({ message: 'Notification not found' });
        notification.isRead = true;
        await notification.save();
        res.json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
