import React from 'react'
import {v1} from "uuid"

const Admin3DFiles = ({currentFiles, setCurrentFiles}) => {

    const onClickDelete = (content) => {
        console.log("DELETE :", content)
    }

    return (
        <>
            <div className="h-10 w-auto content-end text-xl bg-white ">
                3d Files
            </div>
            {currentFiles.map((t) => {
                return (
                    <div key={v1()} className="h-8 flex flex-row text-xl border-black border-2 mb-1">
                        <div className="w-5/6 text-left content-center ">
                            {t}
                        </div>
                        <div
                            className="mx-auto w-8 content-center text-center text-red-700 hover:bg-red-800 hover:text-white cursor-pointer"
                        >
                            X
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Admin3DFiles;