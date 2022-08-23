import React from "react";
import "./pictures.css"
import PicturesAdd from "./picturesAdd";
import PicturesItem from "./picturesItem";


class PicturesHome extends React.Component{

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
        localStorage.setItem("pictures", JSON.stringify(this.state.items))

    }

    LoadAll(){
        const oldState = this.state
        if(localStorage.getItem("pictures"))
            oldState.items = JSON.parse(localStorage.getItem("pictures"))
        else
            oldState.items = []
        this.setState(oldState)

    }


    //наполнение данными
    getSimpleData(){
        let p1 ={
            id: Date.now(),
            name: "Камни",
            imgUrl: "https://image.shutterstock.com/image-photo/abstract-nature-pebbles-background-blue-260nw-428477185.jpg",
            des: "Пляж галька"
        }
        const  oldState = this.state
        oldState.items[0] = p1
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
                        <PicturesAdd  save={this.saveItem.bind(this)}></PicturesAdd>
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
                            <PicturesItem key={item.id} item={item}></PicturesItem>
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

export default PicturesHome;