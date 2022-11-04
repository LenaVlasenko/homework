


exports.getFile = function (request, response) {
    console.log("Get Files")
    let res = {} //обьект для ответа

    //Получаю мой файл
    let file = request.files.file;
    // копирую файл в нужную мне папку
    file.mv("./uploads/" + file.name);

    // Формирую ответ об успешной загрузке
    res = {
        status: "success",
        message: "File is uploaded",
        data: {
            name: file.name,
            mimetype: file.mimetype,
            size: file.size,
        },
    }

    return response.status(200).json(res)
}