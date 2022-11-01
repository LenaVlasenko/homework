import {useEffect} from "react";
import TransitionArray from "./animate/TransitionArray";
import Toggle from "./animate/Toggle";
import Opticality from "./animate/Opticality";
import {useSpring, animated} from "react-spring"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About(){

    const notify = () => toast("Wow so easy!");

    useEffect(() => {    // Оновлюємо заголовок документа, використовуючи API браузера
        // document.title = `Ви натиснули ${count} разів`;
        console.log('use Effect')

    });

    // const animateStyles = useSpring({
    //     from: { opacity: 0 },
    //     to:{opacity: 1, background: "#f00" },
    //     leave: { opacity: 0 },
    //     delay: 0,
    // })

    return(
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">Built with Bootstrap 5</h2>
                        <p className="text-white-50">
                            Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now,
                            simply download the template on
                            <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                            The theme is open source, and you can use it for any purpose, personal or commercial.
                        </p>

                        <button onClick={notify}>Notify!</button>
                        <ToastContainer />

                        <Toggle />
                    </div>
                </div>
                <img className="img-fluid" src="/assets/img/ipad.png" alt="..."/>
            </div>
        </section>


    )
}