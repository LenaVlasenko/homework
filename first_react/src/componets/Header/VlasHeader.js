//подключение модуля РЕАКТ
import React from "react";

//Создание компонента(тут будет меняться только название)
class VlasHeader extends React.Component {
    //Обязательная функция,которая отвечает за вывод компонента
    //То как он будет выводится
    render() {
        return(
            <header>
                <h1>
                    Добро пожаловать на мой сайт
                </h1>
            </header>
        )
    }
}

export default VlasHeader