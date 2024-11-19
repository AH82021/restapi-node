const express = require('express');
const mongoose = require('mongoose');
const routes= require('./routes.js');
const app = express();

require("dotenv").config();



// create a connection to the database 

const PORT = process.env.PORT || 3000;

app.use(express.json());

//  add a user to the database

// http metod , post, put ,delete, get

app.use('/',routes)




mongoose.connect(process.env.MONGO_URI )
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log("Error connecting to MongoDB", err));




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


