
//получаем текущего пользователя
exports.getMe = function (request, response) {

    // Если пользователь не авторизован - нет ключа
    if (!request.user){
        return response.status(403).json({message: "Выне вошли в систему"})
    }



    return response.status(200).json(request.user)

}

// создать мой профиль

exports.setMe = function (){

}