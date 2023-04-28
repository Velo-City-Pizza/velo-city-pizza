require('dotenv').config()
const { Debugger } = require('./debug')
global.debug = Debugger(process.env.NODE_ENV === 'development', global)

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const category_routes = require('./routes/category')

// ----------------- MIDDLEWARE ----------------------
    //  These get called on every request before the page routes

// Attaches body to any request, accessible via res.body
app.use(express.json())

// Custom middleware function, currently only used for debug logging
app.use((req, res, next) => {
    debug.log(req.path, req.method)
    next()
})

// ---------------- PAGE ROUTES ----------------------
app.use('/admin/catalog/category', category_routes) // Experimental

// --- Connect to DB ---
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONG_URI)
    .then(() =>{
        // -- Listen for requests --
        app.listen(process.env.PORT, () => {
            debug.log(`Connected to MongoDB, listening on port ${process.env.PORT}`)
            debug.log('DEVELOPMENT MODE =', process.env.NODE_ENV)
        })
    })
    .catch((error) => {
        console.log(error)
    })
