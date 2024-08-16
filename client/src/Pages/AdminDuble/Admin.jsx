import React, {useCallback, useEffect, useState} from 'react'
import AdminRender from "./AdminRender"
import AdminCards from "./AdminCards"
import AdminImg from "./AdminImg"
import Admin3dModel from "./Admin3dModel"
import Admin3DFiles from "./Admin3dFiles"
import axios from "axios"

const Admin = () => {
    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [localCard, setLocalCard] = useState([])
    const [currentImg, setCurrentImg] = useState([])
    const [localImg, setLocalImg] = useState([])
    const [currentModels, setCurrentModels] = useState([])
    const [localModel, setLocalModel] = useState()
    const [currentFiles, setCurrentFiles] = useState([])
    const [stateGlobal, setStateGlobal] = useState([])

    const getCloud = useCallback(async () => {
        try {
            await axios.get('/api/', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setStateGlobal(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getCloud()
    }, [])

    useEffect(() => {
        let a = []
        stateGlobal.map((t) => {
            a.push(t.project)
        })
        setProjects(Array.from(new Set(a)))
    }, [stateGlobal])

    useEffect(() => {
        let b = []
        stateGlobal.map((t) =>
            t.project === currentProject ? b.push(t) : "")
        setCurrentCards(b)
        setCurrentImg([])
        setCurrentFiles([])
        setLocalCard([])
    }, [currentProject, stateGlobal])

    useEffect(() => {
        let c = []
        let d = []
        if (localCard.length !== 0) {
            localCard.images.map((t) => c.push(t))
            localCard.components.map((t) => d.push(t))
        }
        setCurrentImg(c)
        setCurrentModels(d)
        setCurrentFiles([])
        setLocalModel()
    }, [localCard, stateGlobal])

    useEffect(() => {
        let e = []
        if (localModel) {
            localModel.elems.map((t) => {
                e.push(t)
            })
        }
        setCurrentFiles(e)
    }, [localModel])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">

                <div className="m-4 w-auto h-3/4 flex flex-col ">
                    <AdminRender projects={projects}
                                 currentProject={currentProject}
                                 setCurrentProject={setCurrentProject}
                                 setStateGlobal={setStateGlobal}
                    />
                    <AdminCards currentCards={currentCards}
                                setLocalCard={setLocalCard}
                                localCard={localCard}
                                setStateGlobal={setStateGlobal}
                    />
                </div>

                <div className="m-4 w-auto h-auto flex flex-col ">
                    <AdminImg currentImg={currentImg}
                              setStateGlobal={setStateGlobal}
                              localCard={localCard}
                              stateGlobal={stateGlobal}
                              setLocalImg={setLocalImg}
                              getCloud={getCloud}
                    />
                </div>

                <div className="m-4 w-auto h-auto flex flex-col ">
                    <Admin3dModel localModel={localModel}
                                  currentModels={currentModels}
                                  setLocalModel={setLocalModel}
                    />
                    <Admin3DFiles currentFiles={currentFiles}
                                  setCurrentFiles={setCurrentFiles}
                    />
                </div>

            </div>
        </>
    )
}

export default Admin