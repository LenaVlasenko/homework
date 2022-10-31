// Подключиение модуля работы с базой
const mongoose = require("mongoose");


// Настройка полей (схемы)
const contactsSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
    role: String, // разделение пользователей на группы
    created_at: Date,
    verify_at: Date, // дата проверки пользователя

    //относится к профилю пользователя
    //name: String,
    // phone: String,
    // message: String,
    // created_at: Date,
    // sendToMe: String,
    // sendToUser: String,
});

module.exports = mongoose.model("users", contactsSchema);