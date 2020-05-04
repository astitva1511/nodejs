const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.render('index.pug',{title:'My Express App',message:'hello'});
  
  });

  module.exports = routes;