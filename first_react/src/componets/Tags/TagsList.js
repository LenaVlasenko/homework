//подключение модуля РЕАКТ
import React from "react";
import "./TagList.css";//подключили стили

class TagsList extends React.Component{

    //фрагмент кода который будет запущен обязательно в момент создания компонента
    //тут принято описывать все данные, с которыми мы будем работать в компоненте
    //props - то что мы ему присылаем
    // state - данные внутри компонента
    constructor(props) {
        super(props);

        console.log("Работае конструктор")

        //опишем данные которые у нас есть под вывод
        this.state = {
            error: null,//храним состояние ошибки
            isLoaded: false,// храним состояние - загрузилисьь ли данные
            tags: [], // место, где будут хранится мои данные в данном случае
        }
    }

    //эмитация получения данных с сервера
    getDataFromServer(){

        this.setState({
            tags : [
                {id: 1,name: "Asp"},
                {id: 2,name: "Php"},
                {id: 3,name: "C#"},
                {id: 4,name: "C++"},
                {id: 5,name: "Html"},
                {id: 6,name: "Css"},
            ],
            isLoaded: true
        })


    }

    //в это момент появляются данные
    componentDidMount() {
        console.log("componentDidMount")
        //для первой загрузки делаем тут
        //фетч тут

        //эмитация задержки получения данных
        setTimeout(this.getDataFromServer.bind(this), 3000)
    }


    //Отвечает за то, как будет выглядить компонент
    renderData() {
        console.log("Работает рендер")
        return(
            <ul>
                {
                    this.state.tags.map(tag =>(
                        <li key={tag.id}>{tag.name}</li>
                    ))
                }

            </ul>
        )
    }

    //я принимаю решение как я себя отображаю
    render(){
        //если в компонентах произошла ошибка вывести ее
        if(this.state.error){
            return this.renderError()
        }
        //ели данные еще не получены - вывести, ожидаються данные
        if(!this.state.isLoaded){
            return this.renderPreload()

        }
        //если нет ни ошибки ни получения данных - значит вывожу данные
        return this.renderData()
    }

    // выводим что у нас проблемы Хьюстон
    renderError() {
        return (
            <div>
                <header>Произошла ошибка компонента</header>
                <div>{this.state.error}</div>
            </div>
        )
    }

    //выводим состояние - жду получение данных
    renderPreload(){
        return(
            <div>
                Ожидание получения данных
            </div>
        )
    }
}

export default TagsList;