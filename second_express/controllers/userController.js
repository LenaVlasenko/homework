// Получить модуль работы с базой данных
const User = require('./../models/userModel')

//создать нового студента
exports.create = function (request, response) {
    // Получили нового студента на сервере
    let bodyUser = request.body
    // Создали запись в базе даннх
    const newUser = new User(bodyUser)

    // Сохранили запись в базе данных
    newUser.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вренуть нового студента
            return response.status(201).json(newUser);
        }
    });

    // Теперь за хранение отвечает база данных
}