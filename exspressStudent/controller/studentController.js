
// Получить модуль работы с базой данных
const Student = require('./../models/students')

//создать нового студента
exports.create = function (request, response) {
    // Получили нового студента на сервере
    let bodyStudent = request.body
    // Создали запись в базе даннх
    const newStudent = new Student(bodyStudent)

    // Сохранили запись в базе данных
    newStudent.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вренуть нового студента
            return response.status(201).json(newStudent);
        }
    });

    // Теперь за хранение отвечает база данных
}

//вернуть всех студентов
exports.index = function (request, response) {
    Student.find({}, function(err, allStudents){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allStudents);
        }
    });
}

//Find поиск
exports.find = function (request, response) {
    //params = request.body
    let txtFind = request.body.txtFind
    console.log('Try find: ' + txtFind)

    // Query for a movie that has the title 'The Room'
    const query = {'name': {'$regex': txtFind, '$options': 'i'}}
    const options = {};

    Student.find(query, options, function(err, allStudents){

        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(allStudents)
        }
    });
}

// метод read ONE === GET, вернуть конкретного
exports.show = function (request, response) { //получили всех студентов и отправили со статусом 201

    let findId = request.params.studentId

    Student.findById(findId, function(err, allStudents){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allStudents);
        }
    });
}

//обновить конкретного студента
exports.update = function (request, response) {
    let findId = request.params.studentId
    let upStudent = request.body

    Student.findByIdAndUpdate(findId, upStudent, function (err, newStudent) {
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

//DELETE
exports.delete = function (request, response) {
    let findId = request.params.studentId

    Student.findByIdAndDelete(findId, function(err){

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
