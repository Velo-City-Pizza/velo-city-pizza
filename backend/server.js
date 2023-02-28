require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const index_routes = require('./routes/index');
const order_routes = require('./routes/order');
const category_routes = require('./routes/category');

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
app.use('/admin/catalog/category', category_routes); // Experimental

// --- Connect to DB ---
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONG_URI)
    .then(() =>{
        // -- Listen for requests --
        app.listen(process.env.PORT, () => {
            console.log(`Connected to MongoDB, listening on port ${process.env.PORT}`);
            console.log('DEBUG MODE =', DEBUG_MODE);
        });
    })
    .catch((error) => {
        console.log(error)
    });
