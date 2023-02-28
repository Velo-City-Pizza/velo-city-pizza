const express = require('express');
const router = express.Router();

// Basic order route
router.get('/order', (req, res) => {
    res.json({msg:'Welcome to the order'});
});

module.exports = router;