import React, {useCallback, useEffect, useState} from 'react'
import AdminRender from "./AdminRender"
import AdminCards from "./AdminCards"
import axios from "axios"
import {div} from "three/examples/jsm/nodes/math/OperatorNode";

const Admin = () => {
    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState(localStorage.getItem("currentProject"))
    const [currentCards, setCurrentCards] = useState([])
    const [localCard, setLocalCard] = useState([])
    const [stateGlobal, setStateGlobal] = useState([])
    const [form, setForm] = useState([])
    const [error, setError] = useState()

    const clearError = () => setError("")

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const formHandler = async () => {
        try {
            // await axios.post('/api/main/addblog', {...form}, {
            await axios.post('/api/addmainfull', {...form}, {
                headers: {'Content-Type': 'application/json'}
            })
                .then(() => window.location.reload())

        } catch (error) {
            setError(error.response.status)
            setTimeout(clearError, 2000)
        }
    }

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
    }, [stateGlobal])

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

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">

            <div className="h-1/3">

                <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 relative"
                      onSubmit={e => e.preventDefault()}>

                    <div className="mb-4 h-auto">
                        {/*<label className="block text-gray-700 text-sm font-bold mb-2"*/}
                        {/*       htmlFor="username">*/}
                        {/*    Group*/}
                        {/*</label>*/}
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            name="project"
                            placeholder="group"
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="mb-4 h-auto">
                        {/*<label className="block text-gray-700 text-sm font-bold mb-2"*/}
                        {/*       htmlFor="username">*/}
                        {/*    Card*/}
                        {/*</label>*/}
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            name="name"
                            placeholder="card"
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="flex items-center justify-between h-auto">
                        <button
                            className="bg-gray-400 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={formHandler}
                        >
                            Add
                        </button>
                    </div>
                    <div className=" items-center justify-between h-auto">
                        <div
                            className={`${!error ? "hidden" : ""} bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded `}
                        >
                            {error === 301 ? "dubble card" : ""}
                            {error === 302 ? "dubble card111111" : ""}
                        </div>
                    </div>
                </form>
            </div>

            <div className="m-4 w-auto h-3/4 flex flex-col ">
                <AdminRender projects={projects}
                             currentProject={currentProject}
                             setCurrentProject={setCurrentProject}
                />
                <AdminCards currentCards={currentCards}
                            currentProject={currentProject}
                            stateGlobal={stateGlobal}
                            setStateGlobal={setStateGlobal}
                            localCard={localCard}
                            setLocalCard={setLocalCard}
                            setCurrentCards={setCurrentCards}
                />
            </div>

        </div>
    )
}

export default Admin