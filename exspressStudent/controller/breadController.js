//данные которые я хочу продавать
let bread = {
    name: "gorojanin",
    price: 12.5,
    ingredients: [
        {name: "muka", value: "1 kg"},
        {name: "sugar", value: "po vkysu"},
        {name: "salt", value: "5 g"},
    ]
}

// bread.name => 'Горажанин'
// bread.ingredients[0].name => 'Мука'
//получить хлеб, вмест индекс можно написать гет
exports.index = function (request, response){
    return response.status(200).json(bread)

}