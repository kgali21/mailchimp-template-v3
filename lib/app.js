const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Mailchimp signup route
const Mailchimp = 


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on localhost:${PORT}`));

