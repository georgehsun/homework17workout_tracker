require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose')

let PORT = process.env.PORT || 8082;

let app = express();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(require('./routes/api.js'));
app.use(require('./routes/html_routes.js'));

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});