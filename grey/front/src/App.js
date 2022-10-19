import './App.css';


import { useTransition, animated } from 'react-spring';

import Navigation from "./components/Navigation";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Projects from "./components/Projects";
import Error404 from "./components/Error404";
import MyRouters from "./MyRouters";
import SlickSliderClass from "./components/sliders/slick/SlickSliderClass";



function App() {

    //


  return (
   <>
       {/*<SlickSliderClass></SlickSliderClass>*/}


       <BrowserRouter>

       <Navigation></Navigation>
                    <MyRouters></MyRouters>
       </BrowserRouter>

        <Footer></Footer>
   </>
  );
}


export default App

// <Routes >
// <Route path="/" element={<Masthead></Masthead>} />
// <Route path="/about" element={<About></About>} />
// <Route path="/projects" element={<Projects></Projects>} />
// <Route path="/signup" element={<Signup></Signup>} />
// <Route path="/contact" element={<Contact></Contact>} />
// <Route path="*" element={<Error404></Error404>} />
// </Routes>