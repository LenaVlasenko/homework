import React from "react";

class Contact extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <tr>
            <td>
                {this.props.contact.name}
            </td>
            <td>
                {this.props.contact.subName}
            </td>
            <td>
                {this.props.contact.number}
            </td>
            <td>
                <button data-id={this.props.contact.id} onClick={this.props.delete.bind(this)}>del</button>
            </td>
        </tr>
        )
    }
}

export default Contact