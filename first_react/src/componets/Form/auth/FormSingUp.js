import React from "react";
import VlasInputSubmit from "../../../UI/Form/input/VlasInputSubmit";
import VlasInputPassword from "../../../UI/Form/input/VlasInputPassword";
import VlasInputEmail from "../../../UI/Form/input/VlasInputEmail";

class FormSingUp extends React.Component {
    //Обязательная функция,которая отвечает за вывод компонента
    //То как он будет выводится
    render() {
        return(
            <>
                <VlasInputEmail></VlasInputEmail>
                <VlasInputPassword></VlasInputPassword>
                <VlasInputPassword></VlasInputPassword>
                <VlasInputSubmit></VlasInputSubmit>
            </>
        )
    }
}

export default FormSingUp;
