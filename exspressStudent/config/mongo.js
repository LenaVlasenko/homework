// Подключить модуль работы с базами данных
const mongoose = require("mongoose");

//строка соеденения с сервером базы данных
//const MONGO_URI = 'mongodb+srv://Olena:233211@cluster0.x6vdqf6.mongodb.net/MONGO?retryWrites=true&w=majority'

// Стандартная система подключения к базе банных
exports.connect = () => {
    // Connecting to the database
    mongoose
        .connect (process.env.MONGO_URI, {
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