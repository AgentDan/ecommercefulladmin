import {StateLight} from "../../state/stateLight"
import {StateGlobal} from "../../state/stateGlobal"
import {useCallback, useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import PanelElementsVariantsTailwindMax from "./panel/PanelElementsVariantsTailwindMAX"
import {Canvas} from "@react-three/fiber"
import {Experience} from "./Experience"
import axios from "axios";

const Projects = () => {
    const {id} = useParams()
    const [myElements, setMyElements] = useState([])
    const [stateFull, setStateFull] = useState([])

    const getState = useCallback(async () => {
        try {
            await axios.get('/api/', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setStateFull(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getState()
    }, [])

    useEffect(() => {
        let a = []
        stateFull.map((t) => t._id === id ? a = t.components : "")
        setMyElements(a)
    }, [stateFull])

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