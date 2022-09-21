// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей (схемы)
const contactsSchema = new mongoose.Schema({
    name: String,
    password: String,

    //относится к профилю пользователя
    // email: String,
    // phone: String,
    // message: String,
    // created_at: Date,
    // sendToMe: String,
    // sendToUser: String,
});

module.exports = mongoose.model("contacts", contactsSchema);