import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import PostPage from "./Pages/PostPage";
import ErrorPage from "./Pages/ErrorPage";
import Navigation from "./components/desing/Navigation";
import PageHeader from "./components/desing/PageHeader";
import Footer from "./components/desing/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <PageHeader></PageHeader>
        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<PostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

              </div>
            </div>
          </div>
        </main>
          <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
