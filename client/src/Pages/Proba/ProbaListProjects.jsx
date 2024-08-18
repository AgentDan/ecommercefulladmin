import React, {useCallback, useEffect, useState} from 'react';
import {v1} from "uuid"
import {div} from "three/examples/jsm/nodes/math/OperatorNode";
import ProbaUploadFile from "./ProbaUploadFile";
import axios from "axios";

const ProbaListProjects = ({projects}) => {
    const [localCardName, setLocalCardName] = useState()
    const [localProject, setLocalProject] = useState()
    const [localCard, setLocalCard] = useState()
    const [currentProjects, setCurrentProjects] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [image, setImage] = useState([])
    const [components, setComponents] = useState([])

    useEffect(() => {
        let a = []
        let b = localStorage.getItem('localProject')
        if (localProject !== b) {
            setLocalProject(b)
        }
        projects.map(t => a.push(t.project))
        setCurrentProjects(Array.from(new Set(a)))

        let c = localStorage.getItem('localProject')
        if (c !== "") {
            let d = []
            projects.map(t => t.project === localProject ? d.push(t) : "")
            setCurrentCards(d)
        }

        let localCard = localStorage.getItem('localCard')
        if (localCard !== "") {
            setLocalCard(localCard)
            let a = []
            let b = []
            currentCards.map(t => t._id === localCard ? a.push(t.images) : "")
            currentCards.map(t => t._id === localCard ? b.push(t.components) : "")
            setImage(a[0])
            setComponents(b[0])
        }

    }, [projects])

    const onClickLocalProject = (project) => {
        setLocalProject(project)
        localStorage.setItem('localProject', project)
        localStorage.setItem("localCard", "")
        localStorage.setItem("localCardName", "")
        let a = []
        projects.map(t => t.project === project ? a.push(t) : "")
        setCurrentCards(a)
        setImage([])
        setComponents([])
        setLocalCard([])
    }

    const onClickLocalCard = (tId, tName) => {
        localStorage.setItem('localCard', tId)
        localStorage.setItem('localCardName', tName)
        setLocalCard(tId)
        setLocalCardName(tName)
        let a = []
        let b = []
        currentCards.map(t => t._id === tId ? a.push(t.images) : "")
        currentCards.map(t => t._id === tId ? b.push(t.components) : "")
        setImage(a[0])
        setComponents(b[0])
    }
    const onClickDeleteCard = useCallback(async (id, index) => {
        localStorage.setItem('localCard', "")
        localStorage.setItem('localCardName', "")
        window.location.reload()

        try {
            await axios.delete(`/api/delcard/${id}`, {id}, {
                headers: {'Content-Type': 'application/json'}
            })
                // .then((response) => setCurrentCards(response.data))
                .then((response) => setCurrentCards(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="flex flex-row">
            <div className="h-auto w-1/4">
                <div className="bg-gray-400 h-auto rounded-2xl text-white text-center content-center w-1/2">
                    PROJECTS :
                </div>
                {currentProjects.map((t) => {
                    return (
                        <div key={v1()}
                             className="w-auto h-8 m-1 rounded-2xl content-start border-2 border-black text-left relative">
                            <div
                                className={`h-auto  text-xl w-auto px-2 rounded-2xl top-0 cursor-pointer left-0 ${localProject && t === localProject ? "bg-green-600 text-white " : ""}`}
                                onClick={() => onClickLocalProject(t)}
                            >
                                {t}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-1/2">
                <div className="bg-gray-400 h-auto rounded-2xl text-white text-center content-center w-1/2">
                    CARDS :
                </div>
                <div className="flex flex-wrap h-auto">
                    {currentCards && currentCards.map((t, index) => {
                        return (
                            <div key={v1()} className="w-auto h-auto">
                                <div
                                    className="w-auto h-8 pr-6 m-1 rounded-2xl content-start border-2 border-black text-left relative"
                                >
                                    <div
                                        className={`h-auto text-xl w-auto px-2 rounded-tl-2xl rounded-bl-2xl top-0 cursor-pointer left-0 ${localCard && localCard === t._id ? "bg-green-700 text-white" : ""}`}
                                        onClick={() => onClickLocalCard(t._id, t.name)}
                                    >
                                        {t.name}
                                    </div>
                                    <span
                                        className="bg-red-300 h-7 w-6 text-center content-center rounded-tr-2xl rounded-br-2xl absolute top-0 right-0 hover:bg-red-700 hover:text-white cursor-pointer"
                                        onClick={() => onClickDeleteCard(t._id, index)}
                                    >
                                    X
                                </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-1/4">
                <div className="h-auto">
                    <ProbaUploadFile localProject={localProject} localCard={localCard}/>
                </div>
                <div className="bg-gray-400 h-auto rounded-tr-2xl rounded-bl-2xl text-center content-center mb-2">
                    IMAGES :
                </div>
                {image &&
                    <div className="h-auto mb-2">
                        {image.map((t) => {
                            return (<div key={v1()} className="h-auto">{t}</div>)
                        })
                        }
                    </div>
                }
                <div className="bg-gray-400 h-auto rounded-tr-2xl rounded-bl-2xl text-center content-center mb-2">
                    COMPONENTS :
                </div>
                {components &&
                    <div className="h-auto mb-2">
                        <div className="h-auto">
                            {
                                components.map((t) => {
                                    return (<span key={v1()}>
                                        <div key={v1()}
                                             className="bg-gray-200 h-auto rounded-tr-2xl rounded-bl-2xl text-center content-center">
                                            {t.name}
                                        </div>
                                            {t.elems &&
                                                <div>
                                                    {
                                                        t.elems.map((i) => {
                                                            return (
                                                                <div key={v1()}>
                                                                    {i.name}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }
                                    </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProbaListProjects;