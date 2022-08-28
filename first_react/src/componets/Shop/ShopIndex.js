import React from "react";
import "./ShopIndex.css"


//1
class ShopIndex extends React.Component{

    constructor(props) {
        super(props);

        //2
        //хранилище состояний
        this.state = {
            error: null,
            isLoaded: false,
            clothes: [],
        }
    }


    //4
    //наполняем данными
    getSimpleDta(){
        // let colors = ["black", "pink", "red",]
        // let size = ["s", "m", "l", "xl"]


        let dress = [
            {
                id: Date.now() + "_" + Math.random(),
                name: "платье",
                size: ["m ", "l ",],
                color: ["black ", "pink ",],
                imgUrl: "https:///a.lmcdn.ru/img236x341/R/T/RTLAAU790301_15610622_1_v1_2x.jpg",
                des: "Красота",
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "платье",
                    size:["m ", "xl "],
                    color:["black ", "red ",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW04BWI_13039493_1_v1_2x.jpg",
                    des:"Красота",
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "платье",
                    size:["s ", "l ",],
                    color:["pink ", "red ",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW1GY9Q_7473135_1_v1.jpg",
                    des:"Красота",
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "платье",
                    size:["s ", "m ",],
                    color:["black ", "red ",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW14K1U_10797114_1_v1_2x.jpg",
                    des:"Красота",
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "платье",
                    size:["s ", "m ", "l ", "xl "],
                    color:["black ", "pink ",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW0867Z_14846895_1_v1_2x.jpg",
                    des:"Красота",
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "платье",
                    size:["s ", "m ",],
                    color:["black " , "yellow ",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW0KCA1_17850247_1_v1_2x.jpg",
                    des:"Красота",
                },
                ]

        const oldState = this.state
        oldState.clothes = dress
        oldState.isLoaded = true
        this.setState(oldState)


    }

    //5
    componentDidMount() {
        console.log("componentDidMount")
        //для первой загрузки делаем тут
        //фетч тут

        //эмитация задержки получения данных на 1 сек
        //bind(this) - разрешить обращение к компоненту
        this.getSimpleDta()
    }

    //3
    //Ниже практически все одинаковое копируем менятся только в рендердата
    //Отвечает за то, как будет выглядить компонент
    renderData() {
        console.log("Работает рендер")
        return(
            <div id="cloth">
                <ul>
                    {
                        this.state.clothes.map(clothes =>(
                           <li key={clothes.id}>
                               <h6>название: {clothes.name}</h6>
                               <h6>цвет: {clothes.color}</h6>
                               <h6>размер: {clothes.size}</h6>
                               <div id="sizeImg">
                                   <img src={clothes.imgUrl}  />
                                    <p>{clothes.des}</p>
                               </div>
                           </li>
                        ))
                    }

                </ul>

            </div>
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

export default ShopIndex