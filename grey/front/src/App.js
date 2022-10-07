import Navigation from "./components/Navigation"
import Masthead from "./components/Masthead";
import About from "./components/About";
import Projeckts from "./components/Projects";
import Singup from "./components/Signup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Signup from "./components/Signup";


function App() {
  return (
   <>
       <Navigation></Navigation>
       <Masthead></Masthead>
       <About></About>
       <Projeckts></Projeckts>
       <Signup></Signup>
       <Contact></Contact>
       <Footer></Footer>
   </>
  );
}


export default App