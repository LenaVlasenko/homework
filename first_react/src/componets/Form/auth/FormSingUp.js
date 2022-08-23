import React from "react";
import VlasInputSubmit from "../../../UI/Form/input/VlasInputSubmit";
import VlasInputPassword from "../../../UI/Form/input/VlasInputPassword";
import VlasInputEmail from "../../../UI/Form/input/VlasInputEmail";

class FormSingUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isValid: true,
            err: [],
            p: "",
            cp: "",
        }
    }


    onPasswordChange(ev){
        let oldState = this.state;
        oldState.p = ev.target.value;
        this.setState(oldState);
        this.validate()

    }

    onPasswordConfirmChange(ev){
        let oldState = this.state;
        oldState.cp = ev.target.value;
        this.setState(oldState);
        this.validate()
    }

    validate(){
        let err = []
        if (this.state.p !== this.state.cp) {
            err.push('Пароли не совпадают')
        }else {
            err.push('Пароли совпадают')
        }



        let oldState = this.state;
        if(err.length > 0) {
            oldState.isValid = false
        } else {
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
        console.log(err)
    }

    render(){

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

    //Обязательная функция,которая отвечает за вывод компонента
    //То как он будет выводится

        return(
            <>
                <VlasInputEmail label="Email: "></VlasInputEmail>
                <VlasInputPassword label="Parol: " onChange={this.onPasswordChange.bind(this)}></VlasInputPassword>
                <VlasInputPassword label="Parol: " onChange={this.onPasswordConfirmChange.bind(this)}></VlasInputPassword>
                {err}
                <VlasInputSubmit></VlasInputSubmit>
            </>
        )
    }
}

export default FormSingUp
