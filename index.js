const mongoose = require('mongoose');
const config =  require('config');
const customers = require('./routes/customer');
const express = require('express');
const app = express();
const genres = require('./routes/genres');
const home = require('./routes/home');

mongoose.connect('mongodb://localhost/vidly')
.then(()=>console.log('connected to MongoDb'))
.catch(err => console.error('Could not connect to MongoDb'));

app.use(express.json ());
 //process.env['DEBUG'] = 'app:startup';
app.use('/',home);
app.use('/api/customers',customers);
app.use('/api/genres',genres);
 
//console.log(process.env.NODE_ENV);
// console.log(app.get('env'));

// console.log('Application Name : ' + config.get('name'));
// console.log('Mail-server  Name :' + config.get('mail.host'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));