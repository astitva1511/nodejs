const config = require('config');
const auth = require('./routes/auth');
const mongoose = require('mongoose');
const customers = require('./routes/customers');
const express = require('express');
const app = express();
const genres = require('./routes/genres');
const rentals = require('./routes/rentals');
const movies = require('./routes/movies');
const home = require('./routes/home');
const Joi =require('joi');
const users = require('./routes/users');
Joi.objectId=require('joi-objectid')(Joi);

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/vidly',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('connected to MongoDb'))
.catch(err => console.error('Could not connect to MongoDb'));


app.use(express.json ());
 //process.env['DEBUG'] = 'app:startup';
app.use('/',home);
app.use('/api/customers',customers);
app.use('/api/genres',genres);
app.use('/api/movies',movies);
app.use('/api/rentals',rentals);
app.use('/api/users',users);
app.use('/api/auth',auth);
//console.log(process.env.NODE_ENV);
// console.log(app.get('env'));

// console.log('Application Name : ' + config.get('name'));
// console.log('Mail-server  Name :' + config.get('mail.host'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));