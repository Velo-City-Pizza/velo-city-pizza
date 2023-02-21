const PORT = 4000;

const express = require('express');
const app = express();

// ----------------- PAGE ROUTES ---------------------
var index_route = ["/", "/home", "/index"]
app.get(index_route, (req, res) => {
    res.json({msg:"Welcome to the app"})
})

// --- Listen for requests ---
app.listen(PORT, () => {
    console.log('Listening on port 4000');
});