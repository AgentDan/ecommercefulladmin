import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from "./Pages/Main/MainPage"
import Furniture from "./Pages/Furniture/Furniture"
import {useState, createContext} from "react";
import Lamp from "./Pages/Lamp/Lamp";
import Projects from "./Pages/Projects/Projects"
import Admin from "./Pages/Admin/Admin";
import Proba from "./Pages/Proba/Proba";
import AdminProba from "./Pages/Admin/AdminProba";
import AdminUploadFile from "./Pages/Admin/AdminUploadFile";
import Desk from "./Pages/Desk/Desk";

function App() {
    const [currentLang, setCurrentLang] = useState("en")

    return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/"
                               element={<MainPage currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
                        <Route path="/furniture"
                               element={<Furniture project={"furniture"} currentLang={currentLang}/>}/>
                        <Route path="/lamp"
                               element={<Lamp project={"light"} currentLang={currentLang}/>}/>
                        <Route path="/desk"
                               element={<Desk project={"desk"} currentLang={currentLang}/>}/>
                        <Route path="/project/:id" element={<Projects/>}/>
                        <Route path="/admin197908" element={<AdminProba/>}/>
                        <Route path="/admin197908/info" element={<Admin/>}/>
                        <Route path="/admin197908/upload" element={<AdminUploadFile/>}/>
                        <Route path="/proba" element={<Proba/>}/>
                        <Route path="*"
                               element={<MainPage currentLang={currentLang} setCurrentLang={setCurrentLang}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
    )
}

export default App
