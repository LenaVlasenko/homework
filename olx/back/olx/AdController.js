const adModel = require('./AdModel')


// Создание нового пользователя
//Могут только зарегестрированые пользователи
exports.create = function (request, response){

    //Если пользователь не авторизован - нет ключа. Он не может подать обьявление
    if (!request.user){
        return response.status(401).json({message: "Вы не вошли в систему"})
    }


    let bodyAd = request.body
    bodyAd.author_id = request.user._id // Фиксируем пользователя ( автора обьявления )
    bodyAd.created_at = Date.now()


    //TODO: потом тут получать картинки

    let newAd = new adModel(bodyAd)

    console.log(newAd)

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
    console.log("Пришел за всеми объявлениями")


    //Данные для постраничного вывода

    // количество обьявлений на странице
    let per_page = 2;
    if (request.query.per_page !== undefined) per_page = request.query.per_page


    // Текущая страница
    let page = 1;
    if (request.query.page !== undefined) page = request.query.page


    console.log("Элементов на странице" + per_page)
    console.log("Текущая страница" + page)

    adModel.find({}, function(err, allAds){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            // ???? А видят ли все кто лайкнул?
            for (let i = 0; i < allAds.length; i++){
                // console.log(allAds[i])
                if (allAds[i]['likeTotal'])
                    allAds[i]['likeTotal'] = allAds[i]['like'].length
                else
                    allAds[i]['likeTotal'] = 0
                // Если есть пользователь и есть запись о лайках то:
                if (request.user && allAds[i]['like']){// Если пользователь зарегестрирован
                    try {
                        console.log("Likes: ")
                        console.log(allAds[i]['like'])// Нет лайков - вот и все
                        if (allAds[i]['like'].find(request.user._id))
                            allAds[i]['youLike'] = true
                        else
                            allAds[i]['youLike'] = false
                    } catch (e) {
                        console.log(e)
                    }

                }
            }
            return response.status(200).json(allAds);
        }
    });
}


//поставить лайк
exports.like = function (request, response){
    //Если пользователь не авторизован - нет ключа. Он не может подать обьявление
    if (!request.user){
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let findId = request.params.ad_id
    let user_id = request.user._id

    // Ищу запись по базе данных
    adModel.findById(findId, function(err, ad){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            // Принимаю решение - а может ли лайкнуть этот пользователь???

            if (ad.likes.find(user_id)){
                //этот пользователь лайкнул это обьявление
                return response.status(202).json({"message": "you like ad"});
            }
            else {
                ad.like.add(user_id)
                adModel.updateOne(ad)
                return response.status(201).json(ad);

            }

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


exports.update = function (request, response){
    //Если пользователь не авторизован - нет ключа. Он не может подать обьявление
    //Проверка авторизации пользователя
    if (!request.user){
        return response.status(401).json({message: "У вас нет прав редактировать это обьявление"})
    }

    //Получаем id обьявления из маршрута ( с клиента )
    let findId = request.params.ad_id

    // Ищу запись по базе данных
    adModel.findById(findId, function(err, ad){

        //Если база данных выдала ошибку то вернуть 404
        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            //Если автор не совпадает - ошибка доступа
            //console.log(ad.author_id + " " + request.user._id)
            // console.log(typeof (ad.author_id) + " " + typeof (request.user._id))
            if (ad.author_id.toString() !== request.user._id){
                return response.status(403).json({message: "У вас нет права изменить это обьявление"})
            }

            //получаем поля для обновления ( с клиента )
            let bodyAd = request.body
            //TODO - перенести данные
            ad.title = "Новый заголовок" //bodyAd.title (переданые заголовок с клиента)
            ad.save() //метод библиотеки Mongoose

                return response.status(204).send("Success!")

        }
    });

}


//DELETE
exports.delete = function (request, response) {

    //Если пользователь не авторизован - нет ключа. Он не может подать обьявление
    if (!request.user){
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let findId = request.params.ad_id

    // Ищу запись по базе данных
    adModel.findById(findId, function(err, ad){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            //Если автор не совпадает - ошибка доступа
            //console.log(ad.author_id + " " + request.user._id)
            // console.log(typeof (ad.author_id) + " " + typeof (request.user._id))
            if (ad.author_id.toString() !== request.user._id){
                return response.status(403).json({message: "У вас нет права удалить это обьявление"})
            }

            adModel.findByIdAndDelete(findId, function (err){
                if(err) {
                    console.log(err);
                    return response.status(422).json(err);
                }

                return response.status(204).send("Success!")

            })

        }
    });

    //Найти то что нужно удалить
    // Сравнить автора и того кто удаляет, если они равны только тогда разрешить удаление


}

