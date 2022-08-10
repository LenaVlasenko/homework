let students = [
    {id: 1, name: "Петя", age:20},
    {id: 2, name: "Вася", age:19},
]

// метод create
exports.index = function (request, response) {
    return response.status(200).json(students);
};