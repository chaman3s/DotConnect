const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const { ErrorResponse } = require('../middleware/errorHandler');

const router = express.Router();

// Register
router.post('/register', [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
], async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new ErrorResponse(errors.array().map(err => err.msg).join(', '), 400));
    }

    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return next(new ErrorResponse('User already exists', 400));
        }

        user = new User({ username, email, password });
        await user.save();

        res.status(201).json({ message: 'User registered' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
