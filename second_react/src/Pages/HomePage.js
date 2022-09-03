import React from "react"

class HomePage extends  React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/home-bg.jpg'')"
        document.getElementById("pageHeaderTitle").innerText = "Clean Blog"
        document.getElementById("pageHeaderSlogan").innerText = "A Blog Theme by Start Bootstrap"
    }

    render() {
        return(
            <>
                HomePage
            </>
        )
    }

}

export  default HomePage