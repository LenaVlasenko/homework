jwt = require('jsonwebtoken')


exports.auth = function (request, response, next){
   // Если передали ключ проверю его
    if (request.headers.authorization) {
        jwt.verify(
            req.headers.authorization.split(' '),
            process.env.JWT_KEY,
            (err, jwtUser) => {
                if (err) {
                    console.log("Ошибка расшифрофки")
                    console.log(err)
                    next()
                }//если есть ошибка просто пойду дальше
                console.log('Восстановленные данные')
                console.log(jwtUser)
            }
        )
    }
//пойти дальше
    next()

}