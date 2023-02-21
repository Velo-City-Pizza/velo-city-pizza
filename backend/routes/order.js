const express = require('express');
const router = express.Router();

var order_route = "/order";
router.get(order_route, (req, res) => {
    res.json({msg:'Welcome to the order'});
});

module.exports = router;