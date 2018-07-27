const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

//Controllers
const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());


//Endpoints
app.post('/api/auth/register', ctrl.register);
app.post('/api/auth/login', ctrl.login)


const port = process.env.SERVER_PORT || 4000;
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
    })
    .catch(err => console.log(err))
app.listen(port, () => console.log(`Server running on Port: ${port}`))