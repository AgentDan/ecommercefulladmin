import React, {useContext, useEffect} from 'react'
import PanelElementsVariantsTailwindMax from "./PanelElementsVariantsTailwindMAX.jsx"
import {AuthContext} from "../../../context/AuthContext"

const PanelElementsTailwindMax = ({myElements, setMyElements}) => {
    // const {allProjects, allElem, setAllElem, idProject} = useContext(AuthContext)

    let allElements
    for (let i = 0; i < allProjects.length; i++) {
        // if (allProjects[i].id === idProject)

        if (myElements[i].nameProject === "desk")
        {
            allElements = allProjects[i].components
        }
    }

    useEffect(() => {
        let xxx = allElements.map(t => {
            return {...t}
        })
        setAllElem(xxx)
    }, [allElements]);

    const render = []
    for (let j = 0; j < allElem.length; j++) {
        const NEW = []
        for (let i = 0; i < allElem.length; i++) {
            if (allElem[i].groupElements === j) {
                NEW.push(allElem[i])
            }
        }
        if (NEW.length !== 0) {render.push(<><PanelElementsVariantsTailwindMax NEW={NEW}/></>)}
    }

    return (
        <>
            {render}
        </>
    )
}

export default PanelElementsTailwindMax;