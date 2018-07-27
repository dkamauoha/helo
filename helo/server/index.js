const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());


//Endpoints


const port = process.env.SERVER_PORT || 4000;
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
    })
    .catch(err => console.log(err))
app.listen(port, () => console.log(`Server running on Port: ${port}`))