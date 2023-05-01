// to start express server
const express = require('express');
 
// to create dotenv package
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// enable body parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));