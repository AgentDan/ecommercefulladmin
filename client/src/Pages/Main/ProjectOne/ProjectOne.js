import {Environment, OrbitControls, Scroll, ScrollControls} from "@react-three/drei"
import './ProjectOne.css'
import ModelOne from "./ModelOne.js"

function ProjectOne({currentLang}) {
    const onclickButton1 = () => {
        console.log("HELLO")
    }

    return (
        <>
            <Environment preset="apartment" background blur={0.3} />
            <ScrollControls pages={4} damping={0.2}>

                <ModelOne/>
                {/*<color attach="background" args={["#f9f9fa"]}/>*/}

                <Scroll html style={{width: '100%'}}>
                    <div style={{position: 'absolute', top: `20vh`}}>
                        {/*<h1 style={{*/}
                        {/*    color: '#ff0000',*/}
                        {/*    position: 'absolute',*/}
                        {/*    top: `65vh`,*/}
                        {/*    left: '50%',*/}
                        {/*    fontSize: '4em',*/}
                        {/*    transform: `translate(-50%,-50%)`*/}
                        {/*}}>*/}
                        {/*    {currentLang === "en" ? "SMART DESK" : ""}*/}
                        {/*    {currentLang === "rs" ? "Добродошли" : ""}*/}
                        {/*    {currentLang === "ru" ? "Привет" : ""}*/}
                        {/*</h1>*/}
                        <div className="mt-8  p-5 left-10 font-bold text-8xl text-white h-auto w-2/3">
                            SMART DESK
                        </div>
                        <div className=" mt-4 lg:mt-20 p-5 w-1/2 lg:w-2/6 h-auto text-white ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet commodi consequatur
                            doloremque, error,
                        </div>
                        <div className=" mt-4 lg:mt-20 p-5 md:ml-96 h-auto w-1/2 lg:w-2/6 text-white ">
                            22222222222222222222222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            amet commodi consequatur doloremque,
                        </div>
                        <div
                            className="sm:w-1/2 md:w-2/6 lg:w-1/6 lg:ml-40 mt-4 md:mt-40 h-auto w-1/2 text-white text-3xl p-2 border-4 rounded-2xl text-center cursor-pointer bg-amber-900  md:hover:bg-red-700"
                            onClick={onclickButton1}
                        >
                            Заказать
                        </div>
                    </div>

                    <div style={{position: 'absolute', top: `120vh`}}>
                        <h1 style={{
                            color: '#ff0000',
                            position: 'absolute',
                            top: `65vh`,
                            left: '50%',
                            fontSize: '4em',
                            transform: `translate(-50%,-50%)`
                        }}>
                            {currentLang === "en" ? "Welcome" : ""}
                            {currentLang === "rs" ? "Добродошли" : ""}
                            {currentLang === "ru" ? "Привет" : ""}
                        </h1>
                    </div>

                    <div style={{position: 'absolute', top: `200vh`}}>
                        <h1 style={{
                            color: '#ff0000',
                            position: 'absolute',
                            top: `65vh`,
                            left: '50%',
                            fontSize: '4em',
                            transform: `translate(-50%,-50%)`
                        }}>
                            {currentLang === "en" ? "Welcome" : ""}
                            {currentLang === "rs" ? "Добродошли" : ""}
                            {currentLang === "ru" ? "Привет" : ""}
                        </h1>
                    </div>

                    <div style={{position: 'absolute', top: `300vh`}}>
                        <h1 style={{
                            color: '#ff0000',
                            position: 'absolute',
                            top: `65vh`,
                            left: '50%',
                            fontSize: '4em',
                            transform: `translate(-50%,-50%)`
                        }}>
                            {currentLang === "en" ? "Welcome" : ""}
                            {currentLang === "rs" ? "Добродошли" : ""}
                            {currentLang === "ru" ? "Привет" : ""}
                        </h1>
                    </div>

                </Scroll>
            </ScrollControls>
        </>
    )
}

export default ProjectOne