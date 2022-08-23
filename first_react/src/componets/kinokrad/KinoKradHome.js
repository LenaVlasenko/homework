import React from "react";
import "./kinokrad.css"
import KinoKradItem from "./KinoKradItem";
import KinoKradAdd from "./KinoKradAdd";

class KinoKradHome extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            error: null,//храним состояние ошибки
            isLoaded: false,// храним состояние - загрузилисьь ли данные
            items: [], // место, где будут хранится мои данные в данном случае
        }
    }

    //сохранение элемента в колекции
    saveItem(item){
        const oldState = this.state
        oldState.items.push(item)
        this.setState(oldState)
    }

    saveAll(){
        localStorage.setItem("films", JSON.stringify(this.state.items))

    }

    LoadAll(){
        const oldState = this.state
        if(localStorage.getItem("films"))
        oldState.items = JSON.parse(localStorage.getItem("films"))
        else
            oldState.items = []
        this.setState(oldState)

    }


    //наполнение данными
    getSimpleData(){
        let f1 ={
            id: Date.now(),
            name: "Удача (2022)",
            imgUrl: "https://s.kinokrad.cc/uploads/img/04523a3466187c035f3ada67a5896d15.jpeg",
            des: "Мелани – добродушная девочка, считающая, что она абсолютная неудачница. У нее буквально все валится из рук. Ее утро начинается с разлитого горячего кофе, она может споткнуться о порог, работа мечты выскальзывает прямо из-под носа, а день заканчивается громким скандалом с соседями, которых она затопила. Героиня мультфильма «Удача» практически отчаялась и решила, что белой полосы ей не видать словно своих ушей. Постоянные неудачи следовали за ней безмолвной тенью, что вызывало в ее голове огромнейшие сомнения. Когда надежда практически улетучилась, произошло неожиданное чудо. Мелани попадает в параллельную реальность, где встречает магических существ из детских сказок. Она предстала перед ними настоящим героем, который спасет их хрупкий мир. Магическая страна находится под страшной угрозой. Спасение может прийти лишь с большой светлой силой. Мелани объединяет свои усилия с новоиспеченными друзьями и отправляется на поиски настоящей удачи, о которой мечтала всю жизнь…"
        }
        const  oldState = this.state
        oldState.items[0] = f1
        oldState.isLoaded = true
        this.setState(oldState)
    }

    //запускается когда компонент уже на стронице
    componentDidMount() {
        this.getSimpleData()
    }

    //Отвечает за то, как будет выглядить компонент
    renderData() {
        console.log("Работает рендер")
        return(
            <>
                <div className="row">
                    <div className="col-2">
                    <KinoKradAdd save={this.saveItem.bind(this)}></KinoKradAdd>
                    </div>
                    <div className="col-2">
                        <button onClick={this.saveAll.bind(this)} type="button" className="btn btn-info">
                            Save
                        </button>
                    </div>
                    <div className="col-2">
                        <button onClick={this.LoadAll.bind(this)} type="button" className="btn btn-warning">
                            Load
                        </button>
                    </div>

                </div>
                <div className="row">
                    {
                        this.state.items.map(item =>(
                            <KinoKradItem key={item.id} item={item}></KinoKradItem>
                        ))
                    }

                </div>

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
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                    <header className="alert-heading">Произошла ошибка компонента</header>
                </div>
            </div>
        )
    }

    //выводим состояние - жду получение данных
    renderPreload(){
        return(

            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        )
    }

}

export default KinoKradHome