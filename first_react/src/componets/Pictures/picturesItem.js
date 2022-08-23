import React from "react";
import "./pictures.css"

class PicturesItem extends React.Component{
    constructor(props) {
        super(props);
    }

    //тут мы используем только один рендер
    //поскольку это статический компонент - он не меняет свое состояние
    render(){
        return(
            <div className="card" style={{width: "18rem"}}>
                <img src={this.props.item.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.name}</h5>
                    <p className="card-text">{this.props.item.des}</p>
                </div>
            </div>
        )
    }

}

export default PicturesItem;