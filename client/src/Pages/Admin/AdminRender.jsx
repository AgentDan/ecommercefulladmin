import React, {useCallback, useEffect} from 'react'
import {v1} from "uuid"
import {div} from "three/examples/jsm/nodes/math/OperatorNode";

const AdminRender = (
    {
        projects,
        currentProject,
        setCurrentProject,
    }) => {

    localStorage.setItem("currentProject", currentProject)

    const onClickProject = (t) => {
        localStorage.setItem("checkCards", "1")
        setCurrentProject(t)
        window.location.reload()
    }

    return (
        <>
            <div className="h-10 w-auto content-end text-xl bg-white ">
                Projects:
            </div>
            <div className="text-xs text-white h-auto flex flex-row flex-wrap justify-start ">

                {projects.map((t) => {
                    return (
                        <div key={v1()}
                             className={`w-auto h-8 bg-gray-400 px-4 m-1 rounded-2xl content-center border-2 border-black text-center cursor-pointer hover:bg-green-600 ${t === currentProject ? "bg-green-600 text-red-700 text-xl" : ""}`}
                             onClick={() => {
                                 onClickProject(t)
                             }}
                        >
                            {t}
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default AdminRender