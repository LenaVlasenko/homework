import React from "react";

export default class ClassMethod extends React.Component{

    //Конструктор
    constructor(props) {
        super(props);
        this.state = {
            counter: localStorage.getItem('counter') || 0
            // Мы тут описываем - какие данные у нас возможны
        }
        this.onChange = this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    //Метод, который меняет состояние стейта
    plus(){
        const oldState = this.state
        oldState.counter++
        localStorage.setItem('counter', oldState.counter)
        this.setState(oldState)
    }

    minus(){
        const oldState = this.state
        oldState.counter--
        localStorage.setItem('counter', oldState.counter)
        this.setState(oldState)
    }


    //Динамический перенос данных в стейт
    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        localStorage.setItem(e.target.name, oldState.counter)
        this.setState(oldState)
    }

    componentDidMount() {
        console.log("I am was born")
    }

    componentDidUpdate() {
        document.title = `Ви натиснули ${this.state.count} разів`;
    }

    componentWillUnmount() {
        console.log("I am died")
    }


    // onSubmit(){
    //     let data = {
    //         counter: this.state.counter
    //     }
    //     console.log(data)
    // }


    //Выводит на экран как выглядит компонент
    render() {
        return(
            <>
                {this.state.counter}
                <input type="number"
                       value={this.state.counter}
                       onChange={this.onChange.bind(this)} name='counter'/>
                <button onClick={this.plus.bind(this)} type="button">+</button>
                <button onClick={this.minus.bind(this)} type="button">-</button>
                {/*<button onClick={this.onSubmit.bind(this)} type="button">Send</button>*/}
            </>
        )
    }
}
