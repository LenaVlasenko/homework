const adModel = require('./AdModel')


// Создание нового пользователя
//Могут только зарегестрированые пользователи
exports.create = function (request, response){

    //Если пользователь не авторизован - нет ключа. Он не может подать обьявление
    if (!request.user){
        return response.status(403).json({message: "Вы не вошли в систему"})
    }


    let bodyAd = request.body
    bodyAd.author_id = request.user._id // Фиксируем пользователя ( автора обьявления )
    bodyAd.created_at = Date.now()


    //TODO: потом тут получать картинки

    let newAd = new adModel(bodyAd)

    // Сохранили запись в базе данных
    newAd.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вренуть нового студента
            return response.status(201).json(newAd);
        }
    });
}

//вернуть все обьявления
exports.index = function (request, response) {
    adModel.find({}, function(err, allAds){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allAds);
        }
    });
}

// метод read ONE === GET, вернуть конкретное обьявление
exports.show = function (request, response) { //получили всех студентов и отправили со статусом 201

    let findId = request.params.ad_id

    adModel.findById(findId, function(err, ad){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(ad);
        }
    });
}

