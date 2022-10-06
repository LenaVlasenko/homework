import React from "react"

class EmailVerify extends  React.Component{
    // Цель компонента - получить ключ из строки
    // отправить его на сервер

    // На сервере поставить дату когда пользователь потвердил почту

    constructor(props) {
        super(props);
        console.log("Props")
        //console.log(props)
        // console.log(this.props.match.params.key)
        // const { checkKey } = this.props.match.params.checkKey;
        // console.log(checkKey)
        // const params = useParams()
    }
    render() {
        return(
            <>

            </>
        )
    }
}

export default EmailVerify