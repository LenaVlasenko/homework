// Подключить модуль работы с базами данных
const mongoose = require("mongoose");

// Строка соединения с сервером базы данных
const  MONGO_URI  = 'mongodb+srv://Vlasenko925:Vlasenko109@cluster0.sa70hgl.mongodb.net/?retryWrites=true&w=majority'

// Стандартная система подключения к базе банных
exports.connect = () => {
    // Connecting to the database
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};