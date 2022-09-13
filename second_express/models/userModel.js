// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей (схемы)
const userSchema = new mongoose.Schema({
    name: { type: String }, // Можно указывать так, если будут расширенные параметры
    email: { type: String },
    phone: { type: String },
    message: { type: String },
});

module.exports = mongoose.model("students", userSchema);