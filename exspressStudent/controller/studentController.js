const lib = require ("../lib/guid")
const generateUUID = lib.generateUUID

let students = [
    {_id: generateUUID(), name: "Петя", age:20},
    {_id: generateUUID(), name: "Вася", age:19},
]

//создать нового пользователя === POST
exports.create = function (request, response) {
    //console.log(request.body)
    //получили нового студента
    let newStudent = request.body//получили нового студента на сервере
    newStudent._id = generateUUID()//придумали ему новую фйди
    students.push(newStudent)//положили в базу данных
    return response.status(201).json(newStudent);// вернули статус 201 новый студент
}

// метод read All=== GET
exports.index = function (request, response) {//получили всех студентов и отправили со статусом 201
    return response.status(200).json(students);
};

// метод read ONE === GET, вернуть конкретного
exports.show = function (request, response) {   //получили всех студентов и отправили со статусом 201
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
    if(findStudent === nul && typeof (findStudent) === undefined) {
        console.log('нет студента')
        return response.status(404)
    }
    students[findStudent] = request.body
    console.log('Все обновляется')
    return response.status(204).send()
}
