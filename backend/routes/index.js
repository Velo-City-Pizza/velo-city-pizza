const express = require('express');
const router = express.Router();

var index_route = ['/', '/home', '/index'];
router.get(index_route, (req, res) => {
    res.json({msg:'Welcome to the app'});
});

module.exports = router;