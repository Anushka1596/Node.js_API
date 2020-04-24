const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
require('dotenv/config')
const bodyParser = require('body-parser')
const postsRoute = require('./Routes/posts')

app.use(cors());
app.use(bodyParser.json()); //to parse request Body

//PostRoutes -- Middleware
app.use('/posts',postsRoute) // Whenever there would be /post it would get redirect to PostRoute file

//Default Routes
app.get('/', (req, res)=>{
  res.send('We are on home');
});


//Connect to DB here
mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser:true} ,()=> console.log('Connected to DB'))

app.listen(2000);
