//список доступных студентов
let students = [
    {id: 1, name: "Петя", age:20},
    {id: 2, name: "Вася", age:19},
]

//вернуть всех студентов
exports.index = function (request, response) {
    return response.status(200).json(students);
};


// CRUD - Create, Read, Update, Delete