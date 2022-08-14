
// Получить модуль работы с базой данных
const Student = require('./../models/students')

/**
 * Создать нового студента
 * Create === POST
 * @param request
 * @param response
 */
exports.create = function (request, response) {
    // console.log(request.body)
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
    // newStudent._id = generateUUID()
    // students.push(newStudent)
    // return response.status(201).json(newStudent);
}

/**
 * Вернуть всех студентов
 * Read (All) === GET
 * @param request
 * @param response
 */
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

// метод read ONE === GET, вернуть конкретного
exports.show = function (request, response) { //получили всех студентов и отправили со статусом 201
    //console.log(request.params.studentId)
    let findId = request.params.studentId
    let findStudent = students.find(s => s._id === findId)
    console.log(findStudent)
    if(!findStudent) {
        //console.log('нет студента')
        return response.status(404)
    }
    return response.status(200).json(findStudent);
    //return response.status(200).json(students);
};

//update one === PUT
exports.update = function (request, response) {
    let findId = request.params.studentId
    let findStudent = students.findIndex(s => s._id === findId)

    console.log(findStudent)
    if(findStudent === null && typeof (findStudent) === undefined) {
        console.log('нет студента')
        return response.status(404).send()
    }
    students[findStudent] = request.body
    console.log('Все обновляется')
    return response.status(204).send()
}

//DELETE
exports.delete = function (request, response) {
    let findId = request.params.studentId
    let findStudent = students.findIndex(s => s._id === findId)

    console.log(findStudent)
    if(findStudent === null && typeof (findStudent) === undefined) {
        console.log('нет студента')
        return response.status(404).send()
    }

    students.splice(findStudent,1)
    return  response.status(200).send()
};
