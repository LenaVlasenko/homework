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



// метод read === GET
exports.index = function (request, response) {//получили всех студентов и отправили со статусом 201
    return response.status(200).json(students);
};