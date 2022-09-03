
//import './App.css';
import VlasHeader from "./componets/Header/VlasHeader";
import VlasFooter from "./componets/Footer/VlasFooter";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import React from "react"

import PageAbout from "./pages/About";
import PageHome from "./pages/Home";
import PageError from "./pages/Error";
import Main from "./componets/Nav/Main";
import PagePhoneBook from "./pages/PhoneBook";
import PageKinokrad from "./pages/Kinokrad";
import PagePictures from "./pages/Pictures";
import PageTags from "./pages/Tags";
import PageShop from "./pages/Shop";
//import TagsList from "./componets/Tags/TagsList"; <TagsList></TagsList>



function App() {
  return (
      <BrowserRouter>
        <div className="App conteiner">
            <VlasHeader></VlasHeader>
            <Main></Main>

                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="about" element={<PageAbout />} />
                    <Route path="phone" element={<PagePhoneBook />} />
                    <Route path="kino" element={<PageKinokrad />} />
                    <Route path="pictures" element={<PagePictures />} />
                    <Route path="tag" element={<PageTags />} />
                    <Route path="shop" element={<PageShop />} />
                    <Route path="*" element={<PageError />} />
                </Routes>

            <VlasFooter></VlasFooter>
        </div>
      </BrowserRouter>
  );
}

export default App
