const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const colors = require('colors');

//Load environment variables
dotenv.config({ path: './config/config.env' });

//Connect to Database
connectDB();

//Require routes to make API calls to MongoDB
const workout = require('./routes/workout');

const app = express();
app.use(cors());

//Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Configure API route
app.use('/submit', workout);

//Define Port and Start server

const port = process.env.PORT || 5000;
app.listen(port, function (req, res) {
  console.log(`Server running at ${port}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`);
    else next();
  });
}
