import React from "react";
//import "./ShopIndex.css"
import ShopItem from "./ShopItem";
import ShopAddForm from "./ShopAddForm";


//1
class ShopIndex extends React.Component{

    constructor(props) {
        super(props);

        //2
        //хранилище состояний
        this.state = {
            search: "",// для поиска
            oldClothes: null,//для сохранения старой колекции
            error: null,
            isLoaded: false,
            clothes: [],
        }
    }

    //11
    //возьмет старый стейт запушит туда новый и сохранит create
    saveClothes(newClothes){
        let newEl = {
            id: Date.now() + "_" + Math.random(),
            name: newClothes.name,
            size: newClothes.size,
            color: newClothes.color,
            imgUrl: newClothes.imgUrl,
            des: newClothes.des,
            price: newClothes.price,
            priceMin: newClothes.priceMin,
        }
        const oldState = this.state
        oldState.clothes.push(newEl)
        this.setState(oldState)
    }


    //12 localStorage
    saveAll(){
        localStorage.setItem("clothes", JSON.stringify(this.state.clothes))
    }

    //13 прочитать из локального хранилища
    loadAll(){
        const oldState = this.state
        if(localStorage.getItem("clothes"))
            oldState.clothes = JSON.parse(localStorage.getItem("clothes"))
        else
            oldState.clothes = []
        this.setState(oldState)

    }

    //27
    //ищет контакт по айдишке обновляет данные сохраняет в стейт
    update(id, newData){
        const oldState = this.state
        oldState.clothes[oldState.clothes.findIndex(el=> el.id === id)] ={
            id: id,
            name: newData.name,
            color: newData.color,
            size: newData.size,
            imgUrl: newData.imgUrl,
            price: newData.price,
            priceMin: newData.priceMin,
            des: newData.des,
        }
        this.setState(oldState)
    }

    //delete по id
    //16
    deleteById(clothesId){
        const oldState = this.state
        let index = oldState.clothes.findIndex(c=> c.id === clothesId)
        console.log(index)
        oldState.clothes.splice( index, 1)
        this.setState(oldState)
        console.log(clothesId)
    }

    //17
    //передаем элемент в котором в атрибуте data-id зафиксирован ИД записи
    deleteByEl(el){
        let id = el.target.getAttribute('data-id')
        console.log(id)
        this.deleteById(id)
    }

    //для поиска 28
    onChange(e){
        const oldState = this.state;
        oldState[e.target.name] = e.target.value;
        this.setState(oldState);
        // this.validate()
    }

    //реализуем search 29
    search(){
        let search = this.state.search
        console.log(search)
        const oldState = this.state
        if(search.length > 0){//обозначает что нужно что то искать
            if (oldState.oldClothes === null){
                oldState.oldClothes = oldState.clothes
            }
            oldState.clothes = []
            oldState.oldClothes.map( c=> {
                if (c.size.includes(this.state.search) || c.color.includes(this.state.search))
                    oldState.clothes.push(c)
            } )
            if (!oldState.clothes) oldState.clothes = []
            console.log(oldState.clothes)

        }else {
            if (oldState.oldClothes !== null){
                oldState.clothes = oldState.oldClothes//если я что то сохраняла
                oldState.oldClothes = null//востановлю на место и сотру старое
            }
        }
        console.log('Назад ставлю массив')
        this.setState(oldState)
    }


    //4
    //наполняем данными
    getSimpleDta(){

        let dress = [
            {
                id: Date.now() + "_" +  Math.random(),
                name: "платье",
                size: ["m", "l",],
                color: ["black", "pink",],
                imgUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLAAU790301_15610622_1_v1_2x.jpg",
                des: "Красота",
                price: 700,
                priceMin: 500,
                priceBy: 250,//не передаем
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "сарафан",
                    size:["m", "xl"],
                    color:["black", "red",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW04BWI_13039493_1_v1_2x.jpg",
                    des:"Красота",
                    price: 900,
                    priceMin: 700,
                    priceBy: 350,//не передаем
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "платье",
                    size:["m"],
                    color:["pink", "red",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW1GY9Q_7473135_1_v1.jpg",
                    des:"Красота",
                    price: 1000,
                    priceMin: 700,
                    priceBy: 550,//не передаем
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "халат",
                    size:["s", "l",],
                    color:["black", "red",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW14K1U_10797114_1_v1_2x.jpg",
                    des:"Красота",
                    price: 870,
                    priceMin: 456,
                    priceBy: 280,//не передаем
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "сарафан",
                    size:["xl"],
                    color:["black", "pink",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW0867Z_14846895_1_v1_2x.jpg",
                    des:"Красота",
                    price: 380,
                    priceMin: 220,
                    priceBy: 130,//не передаем
                },
                {
                    id: Date.now() + "_" + Math.random(),
                    name: "платье",
                    size:["s", "m",],
                    color:["black " , "yellow ",],
                    imgUrl:"https://a.lmcdn.ru/img236x341/M/P/MP002XW0KCA1_17850247_1_v1_2x.jpg",
                    des:"Красота",
                    price: 1900,
                    priceMin: 1700,
                    priceBy: 1000,//не передаем
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
            // 7
            // теперь отстраивает shopItem
            <div className="row">
                {/*//10 шоп адд*/}
                {/*//12 сейв*/}
                <div className="row">
                    <div className="col-2">
                        <ShopAddForm save={this.saveClothes.bind(this)}></ShopAddForm>
                     </div>
                    {/*//14 забиндем к кнопке сейв saveAll*/}
                    <div className="col-2">
                        <button onClick={this.saveAll.bind(this)} type="button" className="btn btn-info">Save</button>
                    </div>
                    {/*//15 забиндем к кнопе лоад loadAll*/}
                    <div className="col-2">
                        <button onClick={this.loadAll.bind(this)} type="button" className="btn btn-warning">Load</button>
                    </div>
                    <div>
                        {/*для поиска 27*/}
                        <h4>Поиск по цвету и размеру</h4>
                        <input type="text" name="search" onChange={this.onChange.bind(this)}/>
                        <button onClick={this.search.bind(this)}>Search</button>
                    </div>
                </div>
                    {
                        this.state.clothes.map(clothes =>(
                            <>
                            {/*// clothe добавит clothes*/}
                                {/*25 update*/}
                            <ShopItem key={clothes.id} clothes={clothes}
                                      update={this.update.bind(this)}
                                      delete={this.deleteByEl.bind(this)}></ShopItem>
                            {/*//18*/}
                            {/*    <div className="col-2">*/}
                            {/*<button data-id={clothes.id} onClick={this.deleteByEl.bind(this)}>del</button>*/}
                            {/*    </div>*/}
                            </>
                        ))
                    }
            </div>
        )
    }

    //1
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

    //1
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

    //1
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