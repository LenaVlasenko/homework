//подключение модуля РЕАКТ
import React from "react";

//Создание компонента(тут будет меняться только название)
class VlasInputLogin extends React.Component {
    //Обязательная функция,которая отвечает за вывод компонента
    //То как он будет выводится
    render() {
        return(
           <>
                <input type="text"/>
           </>
        )
    }
}


export default VlasInputLogin

/*
 <div>
                    <label>Email:</label>
                </div>
                <div>
                    <label>Password:</label>
                </div>
                <div>
                    <label>Password Conform:</label>
                </div>
                <div>
                    <label>Submit:</label>
                </div>
 */