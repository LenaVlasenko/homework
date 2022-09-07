import React from "react"

class ContactPage extends  React.Component{


    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/contact-bg.jpg')"
        document.getElementById("pageHeaderBg").style.transition = "background-image 2s"
        document.getElementById("pageHeaderTitle").innerText = "Contact Me"
        document.getElementById("pageHeaderSlogan").innerText = "Have questions? I have answers."
    }

    render() {
        return(
            <>
                ContactPage
            </>
        )
    }

}

export  default ContactPage