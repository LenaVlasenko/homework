// Получить модуль работы с базой данных
const ProductModel = require('./../models/products');


exports.create = function (request, response) {
    // Получили нового студента на сервере
    let bodyProduct = request.body
    // Создали запись в базе даннх
    const newProduct = new ProductModel(bodyProduct)

    // Сохранили запись в базе данных
    newProduct.save(function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вренуть нового студента
            return response.status(201).json(newProduct);
        }
    });
}

exports.index = function (request, response) {
    ProductModel.find({}, function(err, allProducts){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allProducts);
        }
    });
}

exports.show = function (request, response) { //получили всех студентов и отправили со статусом 201

    let findId = request.params.productId

    ProductModel.findById(findId, function(err, allProducts){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allProducts);
        }
    });
}

exports.update = function (request, response) {
    let findId = request.params.productId
    let upProduct = request.body

    ProductModel.findByIdAndUpdate(findId, upProduct, function (err, newProduct) {
        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Update Ok')
            return response.sendStatus(204);
        }
    })
}

exports.delete = function (request, response) {
    let findId = request.params.productId

    ProductModel.findByIdAndDelete(findId, function(err){

        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Del Ok')
            return response.sendStatus(200);
        }
    });
}