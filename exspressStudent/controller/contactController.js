const contactModel = require("../models/contacts");
const nodemailer = require("nodemailer")


exports.create = function (request, response) {
    // Получили нового контакта на сервере
    let bodyContact = request.body
    bodyContact.created_at = Date.now()
    //TODO тут бэк проводит свое иследование еще раз. Проверку на длину валидность и тд

    // Создали запись в базе даннх
    const newContact = new contactModel(bodyContact)

    // Сохранили запись в базе данных
    newContact.save( async function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вренуть что мы сохранили обращение

            //отправить письмо пользователю и сотрудникам
            let transporter = nodemailer.createTransport({
                pool: true,
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: true, // use TLS
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                },
            });

            //это обращение к моему сотруднику
            let toMe = await transporter.sendMail({
                from: process.env.MAIL_FROM_ADDRESS, // sender address
                to: "vlasenko925@gmail.com", // list of receivers
                subject: "New Contact", // Subject line
                text: JSON.stringify(newContact), // plain text body
                html: JSON.stringify(newContact), // html body
            });

            //это письмо к клиенту, что он очент важен для нас
            let toUser = await transporter.sendMail({
                from: process.env.MAIL_FROM_ADDRESS, // sender address
                to: newContact.email, // list of receivers
                subject: "Спасибо за обращение", // Subject line
                text: JSON.stringify(newContact), // plain text body
                html: JSON.stringify(newContact), // html body
            });

            console.log(toMe.messageId)
            console.log(toUser.messageId)

            newContact.sendToMe = toMe.messageId
            newContact.sendToUser = toUser.messageId

            newContact.save(function(err){
                if (err) { // Если ошибка - вернуть ошибку
                    console.log(err)
                    return response.status(422).json(err)
                }

                return response.status(201).json(newContact);
            })


        }
    });
}
