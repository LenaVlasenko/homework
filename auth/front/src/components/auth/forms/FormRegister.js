import React from "react"

class FormRegister extends  React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isEmailValid: true,
            password: "",
            passwordC: "",
            isPasswordValid: true,

            isFormValid: true,
            btnSubmitClass: "btn btn-primary text-uppercase disabled",
        }
        this.onChange = this.onChange.bind(this)//Разрешить методу доступ к классу
    }

    //динамический перенос данных
    onChange(e){
        const oldState = this.state
        oldState[e.target.name] = e.target.value;
        this.setState(oldState);
    }

    send(){
        //console.log("send")
        let data = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log("send")
        console.log(data)

        fetch("http://localhost:3333/api" + "/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                data.token = undefined;
                console.log(data)
                localStorage.setItem('jwtToken', data.token)//при каждом запрос добавляем ключ токена
            })
            .catch(err => {
                console.log(err)
                console.log('Error')
            })


    }

    render(){
        return(
            <>
                <form id="contactForm">
                    <div className="form-floating">
                        <input onChange={this.onChange} name="email" className="form-control" id="email" type="email" placeholder="Enter your email..."/>
                        <label htmlFor="email">Email address</label>
                        <div className="invalid-feedback" id="email_required">An email is required.
                        </div>
                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div className="form-floating">
                        <input onChange={this.onChange} name="password" className="form-control" id="password" type="text"
                               placeholder="Enter your password..."/>
                        <label htmlFor="password">Password</label>
                        <div className="invalid-feedback" id="password_required">A password is
                            required.
                        </div>
                    </div>
                    <div className="form-floating">
                        <input onChange={this.onChange} name="passwordC" className="form-control" id="password" type="text"
                               placeholder="Enter your password..."/>
                        <label htmlFor="password">Password</label>
                        <div className="invalid-feedback" id="password_required">A password is
                            required.
                        </div>
                    </div>

                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error password!</div>
                    </div>

                    <button onClick={this.send.bind(this)} disabled={!this.state.isFormValid} className={this.state.btnSubmitClass} id="submitButton"
                            type="button">Send
                    </button>
                </form>
            </>
        )
    }
}
export default FormRegister