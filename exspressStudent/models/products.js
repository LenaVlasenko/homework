// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей (схемы)
const productsSchema = new mongoose.Schema({
    name: { type: String }, // Можно указывать так, если будут расширенные параметры
    price: Number // Необходимое и достаточное описание
    //полей может быть сколько угодно
});

module.exports = mongoose.model("produts", productsSchema);