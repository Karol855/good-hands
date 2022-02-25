import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Registration from "./components/pages/Registration";
import LogOut from "./components/pages/LogOut";
import Header from "./components/common/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/logowanie" element={<LogIn />}/>
                <Route exact path="/wylogowanie" element={<LogOut />}/>
                <Route exact path="/rejestracja" element={<Registration />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;