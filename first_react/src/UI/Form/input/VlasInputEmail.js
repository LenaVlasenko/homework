//Создание компонента(тут будет меняться только название)
import React from "react";

class VlasInputEmail extends React.Component {
    //Обязательная функция,которая отвечает за вывод компонента
    //То как он будет выводится
    render() {
        return(
            <div>
                <input type="email"/>
            </div>
        )
    }
}


export default VlasInputEmail;