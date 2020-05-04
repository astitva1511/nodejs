const config =  require('config');
const Joi = require('joi');
const express = require('express');
const app = express();
const genres = require('./routes/genres');
const home = require('./routes/home');


app.use(express.json());
 //process.env['DEBUG'] = 'app:startup';
app.use('/',home);
app.use('/api/genres',genres);
 
//console.log(process.env.NODE_ENV);
// console.log(app.get('env'));

// console.log('Application Name : ' + config.get('name'));
// console.log('Mail-server  Name :' + config.get('mail.host'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));