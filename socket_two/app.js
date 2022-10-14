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

/**
 * Поведение нашей системы - когда кто-то пытается присоединиться
 */
io.on("connection" , (socket) => {
    // Когда кто-то приходит - отправляем ему сообщение типа Hello
    console.log("New Connection")

    socket.on('disconnect', function (){
        console.log('Кто ушел из магазина')
    })

})

httpServer.listen(3000);

