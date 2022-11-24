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
let Universe = 'dressDiv'

/**
 * Поведение нашей системы - когда кто-то пытается присоединиться
 */
io.on("connection" , (socket) => {
    console.log("Кто то пришел в магазин")

    //Тому кто пришел говори что у нас 10 яблок
    // Тогда на фронт оно прийдет в socket.on('message'
    socket.send(Universe)

    socket.on('dresses', () => {
        socket.emit('dresses', Universe)// что б я тож знала, что произошло
        socket.broadcast.emit('dresses', Universe)// всем кроме себя
    })

    socket.on('hat', () => {
        socket.emit('hat', Universe)// что б я тож знала, что произошло
        socket.broadcast.emit('hat', Universe)// всем кроме себя
    })

    //Просто слушаем что нам говорят
    socket.on('message',  (world) => {
        console.log('Долли переоделась: ' + world);
        // Происходит разбор что мне сказали
        if (world === 'dresses') {
            socket.emit('dresses', Universe)// что б я тож знала, что произошло
            socket.broadcast.emit('dresses', Universe)// всем кроме себя
        }
        else {
            // что б я тож знала, что произошло
            socket.emit('hat', Universe)
            socket.broadcast.emit('hat', Universe)// всем кроме себя
        }
        //*-- Я говорю только одному - кто приходил
        socket.send(Universe)
        //*-- Я говорю всем кроме меня (поэтому верхняя сторока обязательна)
        socket.broadcast.emit('message', Universe)


    })

    socket.on('disconnect', function () {
        console.log('Кто то ушел с магазина');

    })
})


httpServer.listen(3000);

