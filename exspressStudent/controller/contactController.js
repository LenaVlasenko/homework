const contactModel = require("../models/contacts");


exports.create = function (request, response) {
    // Получили нового контакта на сервере
    let bodyContact = request.body
    bodyContact.created_at = Date.now()
    //TODO тут бэк проводит свое иследование еще раз. Проверку на длину валидность и тд

    // Создали запись в базе даннх
    const newContact = new contactModel(bodyContact)

    // Сохранили запись в базе данных
    newContact.save(function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вренуть что мы сохранили обращение
            return response.status(201).json(newContact);
        }
    });
}
