require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const empRouter = require('./routes/employee');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/emp', empRouter);


mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if(!err){
        console.log("Successfull Connect With MongoDB");
    }
    else{
        console.log("Failed to connect");
    }

});
app.listen(process.env.app_PORT, process.env.app_HOST, () => {
    console.log("Hai User ... !!!!");
    console.log(`Server is running at ===>  http://${process.env.app_HOST}:${process.env.app_PORT}`);
})
module.exports = {
    app,mongoose
};
