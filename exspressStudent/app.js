//сам веб сервер
let express = require('express');
let app = express();


//для технических сообщений
let logger = require('morgan');
app.use(logger('dev'));

//для работы с JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//для работы с кукакми
let cookieParser = require('cookie-parser');
app.use(cookieParser());


//для статических файлов
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// Для работы с базой данных
require("./config/mongo").connect();

//маршрутизация
let indexRouter = require('./routes/index');
app.use('/', indexRouter);


let usersRouter = require('./routes/users');
app.use('/users', usersRouter);


let studentsRouter = require('./routes/students');
app.use('/api/students', studentsRouter);

let breadRouter = require('./routes/bread');
app.use('/api/bread', breadRouter);

let productRouter = require('./routes/products');
app.use('/api/products', productRouter);


//подготовка модуля к работе
module.exports = app;
