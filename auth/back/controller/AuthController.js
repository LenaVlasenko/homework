const userModel = require('./../models/User')

//регистрация нового пользователя
exports.register = function (request,response) {
    let user = request.body
    const newUser = new userModel(user)

    newUser.save( async function (err) {
        if (err){
            console.log(err)
            return response.status(422).json(err)
        }
        return response.status(201).json(newUser)
    })
}