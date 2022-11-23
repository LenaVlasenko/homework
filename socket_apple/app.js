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
let appleCount = 10

/**
 * Поведение нашей системы - когда кто-то пытается присоединиться
 */
io.on("connection" , (socket) => {
    console.log("Кто то пришел в магазин")

    //Тому кто пришел говори что у нас 10 яблок
    // Тогда на фронт оно прийдет в socket.on('message'
    socket.send(appleCount)

    socket.on('plus', () => {
        appleCount++
        socket.emit('plus', appleCount)// что б я тож знала, что произошло
        socket.broadcast.emit('plus', appleCount)// всем кроме себя
    })

    socket.on('minus', () => {
        appleCount--
        socket.emit('minus', appleCount)// что б я тож знала, что произошло
        socket.broadcast.emit('minus', appleCount)// всем кроме себя
    })

    //Просто слушаем что нам говорят
    socket.on('message',  (world) => {
        console.log('Кто то сказал слово: ' + world);
        // Происходит разбор что мне сказали
        if (world === 'plus') {
            appleCount++
            socket.emit('plus', appleCount)// что б я тож знала, что произошло
            socket.broadcast.emit('plus', appleCount)// всем кроме себя
        }
        else {
            appleCount--
            // что б я тож знала, что произошло
            socket.emit('minus', appleCount)
            socket.broadcast.emit('minus', appleCount)// всем кроме себя
        }
        //*-- Я говорю только одному - кто приходил
        socket.send(appleCount)
        //*-- Я говорю всем кроме меня (поэтому верхняя сторока обязательна)
        socket.broadcast.emit('message', appleCount)


    })

    socket.on('disconnect', function () {
        console.log('Кто то ушел с магазина');

    })
})


httpServer.listen(3000);

