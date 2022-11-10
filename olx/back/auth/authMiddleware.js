
jwt = require('jsonwebtoken')


const authMiddleware = function (request, response, next){


    //получаю ключ из любой точки
    const token =
        request.body.token ||
        request.query.token ||
        request.headers["x-access-token"] ||
        request.headers.authorization;

    //console.log("Проверяю ключ: " + token)


   // Если передали ключ проверю его
    if (token !== null && token !== "null") {

        //console.log("Проверяю ключ111: " + token)

        jwt.verify(
            token,
            process.env.JWT_KEY,
            (err, jwtUser) => {


                if (err) {
                    //console.log("Ошибка расшифрофки")
                   // console.log(err)
                }//если есть ошибка просто пойду дальше
                else {
                    //console.log('Восстановленные данные')
                    //console.log(jwtUser)
                    request.user = jwtUser // передаю всем кто пришел
                }
            }
        )
    }
//пойти дальше
    next()

}

module.exports = authMiddleware;