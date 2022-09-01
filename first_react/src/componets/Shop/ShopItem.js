import React from "react";
import "./ShopIndex.css"

class ShopItem extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            //id: Date.now() + "_" + Math.random(),
            clothes: props.clothes,
            isEdit: false, //флаг, который будет переводить систему в режим редактирования
        }
        //21
        this.onChange =this.onChange.bind(this)//разрешить методу доступ к классу
    }


    //18
    // форма как информация выводится информация
    renderInfo(){
        return(
            <div className="card" style={{width:"18rem"}}>
                <h5 className="card-title">Название товара: {this.props.clothes.name}</h5>
                <h5 className="card-title">Цвет: {this.props.clothes.color}</h5>
                <h5 className="card-title">Размер: {this.props.clothes.size}</h5>
                <img src={this.props.clothes.imgUrl} className="card-img-top" alt="alt"/>
                <div className="card-body">
                    <h4 className="card-title">Цена: {this.props.clothes.price} грн</h4>
                    <h6 className="card-title" id="color">Цена при покупке от 2х вещей: {this.props.clothes.priceMin} грн</h6>
                    <p className="card-text">Описание твара:<br/> {this.props.clothes.des}</p>
                    {/*//создаем кнопи 23*/}
                    <div>
                        <button data-id={this.props.clothes.id} onClick={this.props.delete.bind(this)}>del</button>
                        <button onClick={this.startEdit.bind(this)}>edit</button>
                    </div>
                </div>
            </div>
        )
    }

    //может когда то будет валидация
    validate(){}

    //20
    onChange(e){
        const oldState = this.state;
        oldState[e.target.name] = e.target.value;
        this.setState(oldState);
        this.validate()
    }

    //19
    //отображаю в режиме редактирования
    //редактирование
    renderForm(){
        return (
            <>
                <div className="col-3">
                    <label> Name:  <input type="text" name="name" value={this.state.name} onChange={this.onChange} /> </label>
                    <label>Цвет: <input type="text" name="color" value={this.state.color} onChange={this.onChange} /> </label>
                    <label>Размер: <input type="text" name="size" value={this.state.size} onChange={this.onChange} /> </label>
                    <label>карточка товара:  <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.onChange} /> </label>
                    <label>imgUrl: <input type="text" name="price" value={this.state.price} onChange={this.onChange} /> </label>
                    <label>Цена при покупке от 2х вещей:  <input type="text" name="priceMin" value={this.state.priceMin} onChange={this.onChange} /> </label>
                    <label>Описание твара: <input type="text" name="des" value={this.state.des} onChange={this.onChange} /> </label>
                    <div>
                        <button onClick={this.stopEdit.bind(this)}>Cancel</button>
                        <button onClick={this.save.bind(this)}>Save</button>
                    </div>
                </div>

            </>
        )
    }

    //22
    startEdit(){
        const oldState = this.state
        oldState.isEdit = true
        oldState.name = this.props.clothes.name
        oldState.color = this.props.clothes.color
        oldState.size = this.props.clothes.size
        oldState.imgUrl = this.props.clothes.imgUrl
        oldState.price = this.props.clothes.price
        oldState.priceMin = this.props.clothes.priceMin
        oldState.des = this.props.clothes.des
        this.setState(oldState)
    }

    //24
    stopEdit(){
        const oldState = this.state
        oldState.isEdit = false
        this.setState(oldState)
    }

    //26
    //чтитает с полей данные, передает в апдейт и снимает флажок стоп эдит
    save(){
        this.props.update(this.props.clothes.id, {
            name: this.state.name,
            color: this.state.color,
            size: this.state.size,
            imgUrl: this.state.imgUrl,
            price: this.state.price,
            priceMin: this.state.priceMin,
            des: this.state.des,
        })
        this.stopEdit()

    }

    // 6
    // форма как информация выволится
    render() {
        if (this.state.isEdit) return this.renderForm()
        else return this.renderInfo()
    }
}

export default ShopItem