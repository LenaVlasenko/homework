import {useEffect} from "react";

export default function Masthead(){

    useEffect(() => {    // Оновлюємо заголовок документа, використовуючи API браузера
        // document.title = `Ви натиснули ${count} разів`;
        console.log('use Effect')
        document.getElementById("masthead").classList.remove("onLoad")
        document.getElementById("masthead").classList.add("onLoad")
    });

    return(
        <header className="masthead" id="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme
                            created by Start Bootstrap.</h2>
                        <a className="btn btn-primary" href="#about">Get Started</a>
                    </div>
                </div>
            </div>
        </header>

    )
}