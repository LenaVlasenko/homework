import React from "react";

class ShopAddForm extends React.Component{
    constructor(props) {
        super(props);

        //7
        this.state = {
            name: "",
            size: [],
            color: [],
            imgUrl: "",
            des: "",
            price: "",
            priceMin: "",
            isValid: false,//все ли поля заполнены
            err: [],//есть ли ошибка
        }
        this.onChange =this.onChange.bind(this)//разрешить методу доступ к классу
    }

    //валидация полей в форме
    validate() {
        let err = []
        if(this.state.name.length === 0) err.push("заполнете все поля ввода")
        if(this.state.size.length === 0) err.push("заполнете все поля ввода")
        if(this.state.color.length === 0) err.push("заполнете все поля ввода")
        if(this.state.imgUrl.length === 0) err.push("заполнете все поля ввода")
        if(this.state.des.length === 0) err.push("заполнете все поля ввода")
        if(this.state.price.length === 0) err.push("заполнете все поля ввода")
        if(this.state.priceMin.length === 0) err.push("заполнете все поля ввода")
        //полей может быть много
        const oldState = this.state
        oldState.err = err
        if (err.length === 0)
            oldState.isValid = true
        else
            oldState.isValid = false
        this.setState(oldState)
    }

    //взяли старое сохранили поместили на место
    //8
    onChange(e){
        const oldState = this.state;
        oldState[e.target.name] = e.target.value;
        this.setState(oldState);
        this.validate()
    }

    //здесь должен быть свое сохранение
    //12
    onSave(){
        this.props.save(this.state);
    }


    //9
    //форма в которую мы вносим изменение
    render() {
        return(
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addClothes">
                    Add
                </button>

                <div className="modal fade" id="addClothes" tabIndex="-1" aria-labelledby="addClothesModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addClothesModalLabel">Add Clothes</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                            {/*//вывод полей форме добавления*/}
                                <h3 id="color">Заполните все поля, иначе форма не отправится!!!</h3>
                                <label>New Dress: <input type="text" name="name" onChange={this.onChange}/></label>
                                <label>New size: <input type="text" name="size" onChange={this.onChange}/></label>
                                <label>New color: <input type="text" name="color" onChange={this.onChange}/></label>
                                <label>New imgUrl: <input type="text" name="imgUrl" onChange={this.onChange}/></label>
                                <label>New price: <input type="text" name="price" onChange={this.onChange}/></label>
                                <label>New priceMin: <input type="text" name="priceMin" onChange={this.onChange}/></label>
                                <label>New des:
                                    <textarea name="des" onChange={this.onChange}></textarea>
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/*//привязываем к кнопке, добавление*/}
                                <button disabled={!this.state.isValid} onClick={this.onSave.bind(this)} type="button" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default ShopAddForm
