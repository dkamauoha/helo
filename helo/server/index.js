const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

//Controllers
const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            username: '',
            profile_pic: '',
            id: null
        }
    }
    next()
})


//Endpoints
app.post('/api/auth/register', ctrl.register);
app.post('/api/auth/login', ctrl.login);
app.post('/api/auth/logout', ctrl.logout);


const port = process.env.SERVER_PORT || 4000;
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
    })
    .catch(err => console.log(err))
app.listen(port, () => console.log(`Server running on Port: ${port}`))