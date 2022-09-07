import React from "react"

class AboutPage extends  React.Component{


    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/about-bg.jpg')"
        document.getElementById("pageHeaderBg").style.transition = "background-image 2s"
        document.getElementById("pageHeaderTitle").innerText = "About Me"
        document.getElementById("pageHeaderSlogan").innerText = "This is what I do."
    }

    render() {
        return(
            <>
                AboutPage
            </>
        )
    }

}

export  default AboutPage