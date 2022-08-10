//сам веб сервер
let express = require('express');
let app = express();


//для технических сооющений
let logger = require('morgan');
app.use(logger('dev'));

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//для работы с кукакми
let cookieParser = require('cookie-parser');
app.use(cookieParser());


//для статических файлов
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//маршрутизация
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let studentsRouter = require('./routes/students');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/students', studentsRouter);

module.exports = app;
