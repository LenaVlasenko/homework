import React from "react"

class PostPage extends  React.Component{


    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/post-bg.jpg')"
        document.getElementById("pageHeaderBg").style.transition = "background-image 2s"
        document.getElementById("pageHeaderTitle").innerText = "Post"
        document.getElementById("pageHeaderSlogan").innerText = "Problems look mighty small from 150 miles up  "
        //document.getElementById("postHeadingDown").innerText = "Posted by Start Bootstrap on August 24, 2022"
        let ph = document.getElementById("postHeading")
        let span = document.createElement("span")
        //ph.className = "post-heading"
        span.id = "pagePostSpan"
        span.className = "meta"
        span.innerHTML = '<a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Start Bootstrap</a> on August 24, 2022'
        ph.appendChild(span)
    }

    //уничтожили элемент на других страницах
    componentWillUnmount() {
        let span = document.getElementById("pagePostSpan")
        let ph = document.getElementById("postHeading")
        ph.removeChild(span)
        //ph.className = "page-heading"
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