require('dotenv').config()

const express = require('express');
const app = express();
const index_routes = require('./routes/index');
const order_routes = require('./routes/order');

var DEBUG_MODE = false;
if (process.argv[2]) DEBUG_MODE = true;

// ----------------- MIDDLEWARE ----------------------
    //  These get called on every request before the page routes

// Attaches body to any request, accessible via res.body
app.use(express.json())

// Custom middleware function, currently only used for debug logging
app.use((req, res, next) => {
    if (DEBUG_MODE) {
        console.log(req.path, req.method);
    }
    next();
});

// ---------------- PAGE ROUTES ----------------------
app.use(index_routes);
app.use(order_routes);

// --- Listen for requests ---
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
    console.log('DEBUG MODE =', DEBUG_MODE);
});