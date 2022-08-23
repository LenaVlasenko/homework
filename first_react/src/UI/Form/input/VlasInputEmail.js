//Создание компонента(тут будет меняться только название)
import React from "react";

class VlasInputEmail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isValid: true,
            err: [],
            email: "",
        }
    }

    onChange(ev){
        this.checkValid(ev)
        if(this.props.onChange){
            this.props.onChange(ev)
        }
    }

    checkValid(ev){
        let email = ev.target.value
        console.log(email)
        let err = []

        // Регулярное выражение на наличие цифры
        let isEmail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/


        if(email.length < 8){
            err.push("пароль должен быть длинее 8 символов")
        }
        if(!isEmail.test(email)){
            err.push("email должен содержать латинские буквы, цифры, собаку и точку")
        }


        let oldState = this.state
        if(err.length > 0){
            oldState.isValid = false
        }else{
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
        console.log(err)
    }

    render() {

        let err = ""
        if(!this.state.isValid) {
            err = (
                <ul>
                    {this.state.err.map( e => {
                        return (
                            <li> {e} </li>
                        )
                    })}
                </ul>
            )
        }

        let label = ''

        if(this.props.label){
            label = (<label>{this.props.label}</label>)
        }


        return(
            <div>
                {label}
                <input type="email" onChange={this.onChange.bind(this)}/>
                {err}
            </div>
        )
    }
}


export default VlasInputEmail