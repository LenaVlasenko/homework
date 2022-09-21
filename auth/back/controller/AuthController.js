const userModel = require('./../models/User')

//Авторизация пользователя
exports.login = function (request,response){
    let user = request.body
    console.log(user)

    userModel.findOne({email: user.email, password: user.password},
        function (err, dbUser){
        //если есть ошибка вернуть ошибку
            if (err){
                console.log(err)
                return response.status(422).json(err)
            }
            // если такой пользователь не найден вернуть ошибку 403
            if (dbUser === null){

                return response.status(403).json('{"err":"Auth"}')
            }
            console.log("Find")
            console.log(dbUser)
            return response.status(201).json(dbUser)
        }
    )
}

//регистрация нового пользователя
exports.register = function (request,response) {
    let user = request.body
    const newUser = new userModel(user)

    console.log(user)

    newUser.save( async function (err) {
        if (err){
            console.log(err)
            return response.status(422).json(err)
        }
        return response.status(201).json(newUser)
    })
}