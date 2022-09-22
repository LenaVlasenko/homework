// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей (схемы)
const contactsSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,

    //относится к профилю пользователя
    //name: String,
    // phone: String,
    // message: String,
    // created_at: Date,
    // sendToMe: String,
    // sendToUser: String,
});

module.exports = mongoose.model("users", contactsSchema);