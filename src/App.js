import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";



function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/logowanie" element={<LogIn />}/>
                    <Route exact path="/rejestracja" element={<Registration />}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;