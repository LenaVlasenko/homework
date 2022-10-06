jwt = require('jsonwebtoken')
const userModel = require('./../models/User')
// подключаем bcrypt
let bcrypt = require('bcrypt');
// создаем соль
let salt = process.env.BCRYPR_SALT //bcrypt.genSaltSync(10);
//let salt = bcrypt.genSaltSync(10);


//Авторизация пользователя
exports.login = function (request,response){
    //console.log(salt)
    let user = request.body
    bcrypt.hash(user.password, salt, function (err, result) {
        //если есть ошибка вернуть ошибку
        if (err){
            console.log(err)
            return response.status(422).json(err)
        }
        user.password = result
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
                let jwtUser = {
                    //user: dbUser,  посылать данные - ну можно имя например
                    token: jwt.sign(
                        {_id:dbUser._id,
                            email: dbUser.email
                        },//что я шифрую
                        process.env.JWT_KEY)// ключ шифра
                }
                return response.status(201).json(jwtUser)
            })
    })

}

//регистрация нового пользователя
exports.register = function (request,response) {
    let user = request.body
    bcrypt.hash(user.password, salt, function (err, result){
        //если есть ошибка вернуть ошибку
        if (err){
            console.log(err)
            return response.status(422).json(err)
        }
        user.password = result
        console.log(result)
        console.log(user)

        const newUser = new userModel(user)

        newUser.save( async function (err) {
            if (err){
                console.log(err)
                return response.status(422).json(err)
            }
            return response.status(201).json(newUser)
        })
    })


}