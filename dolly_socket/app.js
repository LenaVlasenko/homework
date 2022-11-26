// Создадим простой веб сервер для поддержки CORS
import { createServer } from "http"
const httpServer = createServer()

// Создадим пассивный сокет - и будем ждать соединений
import {Server} from "socket.io"
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:63342"
    }
});

//При открытии магазина у нас 20 яблок
let myDiv = document.getElementById("dollyDiv")
/**
 * Поведение нашей системы - когда кто-то пытается присоединиться
 */
io.on("connection" , (socket) => {
    console.log("Кто то пришел в магазин")

    //Тому кто пришел говори что у нас 10 яблок
    // Тогда на фронт оно прийдет в socket.on('message'
    socket.send(dress)

    socket.on('none', () => {

        socket.emit('none', dress)// что б я тож знала, что произошло
        socket.broadcast.emit('none', dress)// всем кроме себя
    })

    socket.on('minus', () => {
        socket.emit('minus', dress)// что б я тож знала, что произошло
        socket.broadcast.emit('minus', dress)// всем кроме себя
    })

    //Просто слушаем что нам говорят
    socket.on('message',  (world) => {
        console.log('Кто то сказал слово: ' + world);

        // Происходит разбор что мне сказали
        if (world === 'none') {
            socket.emit('none', dress)// что б я тож знала, что произошло
            socket.broadcast.emit('none', dress)// всем кроме себя
        }
        else {
            appleCount--
            // что б я тож знала, что произошло
            socket.emit('minus', dress)
            socket.broadcast.emit('minus', dress)// всем кроме себя
        }
        //*-- Я говорю только одному - кто приходил
        socket.send(dress)
        //*-- Я говорю всем кроме меня (поэтому верхняя сторока обязательна)
        socket.broadcast.emit('message', dress)


    })

    socket.on('disconnect', function () {
        console.log('Кто то ушел с магазина');

    })
})


httpServer.listen(3000);

