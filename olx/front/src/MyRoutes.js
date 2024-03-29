import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";
import Error404 from "./pages/Error404";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import OlxHomePage from "./pages/olx/OlxHomePage";

export default  function MyRoutes(){

    return(
        <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/login" element={<LoginPage></LoginPage>} />
            <Route path="/register" element={<RegisterPage></RegisterPage>} />
            <Route path="/olx" element={<OlxHomePage></OlxHomePage>} />
            <Route path="*" element={<Error404></Error404>} />
        </Routes>
    )
}