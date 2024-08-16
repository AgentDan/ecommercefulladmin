import {StateLight} from "../../state/stateLight"
import {StateGlobal} from "../../state/stateGlobal"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import PanelElementsVariantsTailwindMax from "./panel/PanelElementsVariantsTailwindMAX"
import {Canvas} from "@react-three/fiber"
import {Experience} from "./Experience"

const Projects = () => {
    const {id} = useParams()
    const [myElements, setMyElements] = useState([])
    let elements = []


    StateGlobal.map((t) => t.id === id ? elements = t.components : "")
    useEffect(() => {
        setMyElements(elements)
    }, [])

    return (
        <>
            <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
                <Experience myElements={myElements}/>
            </Canvas>
            <PanelElementsVariantsTailwindMax myElements={myElements} setMyElements={setMyElements}/>
        </>
    )
}

export default Projects