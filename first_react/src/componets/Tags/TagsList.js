//подключение модуля РЕАКТ
import React from "react";
import "./TagList.css";
import TagAdd from "./TagAdd";

//подключили стили

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
        this.deleteElement = this.deleteElement.bind(this);
    }


    deleteElement(e){
        console.log("Delete")
        console.log(e.currentTarget.parentNode.getAttribute("data-key"))
        let id = e.currentTarget.parentNode.getAttribute("data-key")
        const oldState = this.state;
        oldState.tags.splice(oldState.tags.findIndex(el=> el.id == id),1)
        this.setState(oldState);
    }

    //метод, который добавит новую метку к имеющемся масиву
    addNewTag(newTagName){
        const oldState = this.state;
        let newTag = {
            id : Date.now(),
            name : newTagName
        }
        oldState.tags.push(newTag);
        this.setState(oldState);
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

        //эмитация задержки получения данных на 1 сек
        //bind(this) - разрешить обращение к компоненту
        setTimeout(this.getDataFromServer.bind(this), 1000)
    }


    //Отвечает за то, как будет выглядить компонент
    renderData() {
        console.log("Работает рендер")
        return(
            <>
            <ul>
                {
                    this.state.tags.map(tag =>(
                        <li data-key={tag.id} key={tag.id}>{tag.name}
                            <span onClick={this.deleteElement}>-</span>
                        </li>
                    ))
                }

            </ul>
                <TagAdd addNewTag={this.addNewTag.bind(this)}></TagAdd>

            </>
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

            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        )
    }
}

export default TagsList;