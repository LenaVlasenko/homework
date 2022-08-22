//подключение модуля РЕАКТ
import React from "react";

//Создание компонента(тут будет меняться только название)
class VlasInputPassword extends React.Component {
    //Обязательная функция,которая отвечает за вывод компонента
    //То как он будет выводится

    constructor(props){
        super(props);
        this.state = {
            isValid: true,
            err: [],
        }
    }

    //Валидация
    checkValid(ev){
        let pass = ev.target.value
        //console.log(pass)
        let err = []

        // Регулярное выражение на наличие цифры
        let isNum = /\d{1,}/
        // Большие
        let isUpper = /.*[A-Z].*/
        // Маленькие
        let isLower = /.*[a-z].*/

        if(pass.length < 8){
            err.push("пароль должен быть длинее 8 символов")
        }
        if(!isNum.test(pass)){
            err.push("пароль должен содержать цифры")
        }
        if(!isUpper.test(pass)){
            err.push("пароль должен содержать большие буквы")
        }
        if(!isLower.test(pass)){
            err.push("пароль должен содержать маленькие буквы")
        }

        let oldState = this.state
        if(err.length > 0){
            oldState.isValid = false
        }else{
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
    }


//Valided
    render() {

        let err = ""
        if(!this.state.isValid) {
            err = (
                <p> Есть ошибки </p>
                // <ul>
                //     {this.state.err.map( e => {
                //       <li key={Date.now()}> {e} </li>
                //     })}
                // </ul>
            )
        }
        //console.log(err)

        return(
            <>
                <input type="password" onKeyDown={this.checkValid.bind(this)}/>
                {err}
            </>
        )
    }
}


 export default VlasInputPassword;