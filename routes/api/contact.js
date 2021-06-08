const express = require('express');
const router = express.Router();

// @route   GET /contact
// @desc    Route for Contact page
// @access  Public
router.get('/', (req, res) => {
    res.render('contact');
});


// @route   POST /contact
// @desc    Send form data to email
// @access  Public
app.post('/contact', (req, res) => {
    // TODO:
    // Send email here
    res.json({ message: 'Message received!'})
});

module.exports = router;