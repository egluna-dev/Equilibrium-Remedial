const express = require('express');
const router = express.Router();

// @route   GET /about
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.render('about');
});
module.exports = router;