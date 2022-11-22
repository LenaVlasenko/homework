// Подключиение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const adSchema = new mongoose.Schema({
   // _id - сделает база данных
    author_id: {type: mongoose.ObjectId}, // ??String
    created_at: Date, // когда создал
    title: String,
    message: String, // Текст обьявления
    type: Number, // Тип обьявления 0 - куплю, 1 - продам, 2 - поменяю ...
    price: Number, // цена вопроса
    location: String, // Адрес
    city: String, // Город
    imgMain: String, // Ссылка на главное изображение
    images: [String], // Набор дополнительныхизоброжений
    isOpen: Boolean, // Актуально ли обьявление
    category: Number, // Кодкатегории 0 - недвижимость, 1 - быт тех, 2 - авто
    count: Number, // Остаток на складе ( нет в наличии )


    // One To Many
    likes:[],  // (ad_id) user_id - сохранить кто лайкнул пост тут
    //favorites: [],
    rating: [], // (ad_id) (level, user_id) - оценка пользователя
    //comments: [], // (ad_id) (message, user_id) - коментарий

});

module.exports = mongoose.model("ads", adSchema)