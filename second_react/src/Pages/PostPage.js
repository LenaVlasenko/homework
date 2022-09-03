import React from "react"

class PostPage extends  React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/post-bg.jpg')"
        document.getElementById("pageHeaderTitle").innerText = "Man must explore, and this is exploration at its greatest"
        document.getElementById("pageHeaderSlogan").innerText = "Posted by Start Bootstrap on August 24, 2022"
    }

    render() {
        return(
            <>
                PostPage
            </>
        )
    }

}

export  default PostPage