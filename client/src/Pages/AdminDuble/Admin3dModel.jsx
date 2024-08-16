import React from 'react'
import {v1} from "uuid"

const Admin3dModel = ({currentModels, localModel, setLocalModel}) => {
    return (
        <>
            <div className="h-10 w-auto content-end text-xl bg-white ">
                3d Model
            </div>
            {currentModels.map((t) => {
                return (
                    <div key={v1()} className="h-8 flex flex-row text-xl border-black border-2 mb-1">
                        <div className={`w-5/6 text-left content-center cursor-pointer ${localModel && localModel._id === t._id ? "bg-green-600" : ""}`}
                             onClick={()=>setLocalModel(t)}
                        >
                            {t.name}
                        </div>
                        <div className="mx-auto w-8 content-center text-center text-red-700 hover:text-white hover:bg-red-800 cursor-pointer">
                            X
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Admin3dModel;