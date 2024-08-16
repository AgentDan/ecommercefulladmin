import './MainPage.css'
import {Canvas} from "@react-three/fiber"
import ProjectOne from "./ProjectOne/ProjectOne.js"
import Lang from "../Lang/Lang";
import {Menu} from "../Menu/Menu";
import Header from "../Header/Header";

const MainPage = ({setCurrentProject, currentLang, setCurrentLang}) => {
    return (
        <>
            <Menu currentLang={currentLang}/>
            <Header setCurrentLang={setCurrentLang} currentLang={currentLang}/>
            <Lang setCurrentLang={setCurrentLang} currentLang={currentLang}/>
            <Canvas camera={{fov: 54, position: [2, 1, 5]}}>
                <ProjectOne currentLang={currentLang}/>
            </Canvas>
        </>
    )
}

export default MainPage