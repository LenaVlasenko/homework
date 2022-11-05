const {request} = require("express");

const modelUser = require('./models/User')

//получаем текущего пользователя
exports.getMe = function (request, response) {

    // Если пользователь не авторизован - нет ключа
    if (!request.user){
        return response.status(403).json({message: "Вы не вошли в систему"})
    }

    modelUser.findById(request.user._id, function (err, user){

        if (err){
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            user['password'] = null
            //delete user['password']

            return response.status(200).json(user)
        }
    })

}

// сохранить мой профиль

exports.setMe = function (){

}