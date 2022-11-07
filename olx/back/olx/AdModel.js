// Подключиение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const adSchema = new mongoose.Schema({
   // _id - сделает база данных
    author_id: {type: mongoose.ObjectId}, // ??String
    created_at: Date, // когда создал
    message: String, // Текст обьявления
    type: Number, // Тип обьявления 0 - куплю, 1 - продам, 2 - поменяю ...
    price: Number, // цена вопроса
    location: String, // Адрес
    city: String, // Город
    imgMain: String, // Ссылка на главное изображение
    images: [String], // Набор дополнительныхизоброжений
    isOpen: Boolean, // Октивно ли обьявление
    category: Number, // Кодкатегории 0 - недвижимость, 1 - быт тех, 2 - авто

});

module.exports = mongoose.model("ads", adSchema)