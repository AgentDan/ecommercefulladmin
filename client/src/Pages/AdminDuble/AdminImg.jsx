import React, {useCallback, useEffect} from 'react'
import {v1} from "uuid"
import axios from "axios"

const AdminImg = ({currentImg, localCard, setStateGlobal, stateGlobal, setLocalImg, getCloud}) => {

    const onClickDeleteImg = useCallback(async (nameImg, localCardId) => {
        try {
            await axios.delete(`/api/delImg/`, {
                headers: {'Content-Type': 'application/json'},
                params: {nameImg, localCardId}
            })
                .then((response) =>  getCloud())
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <div className="w-auto h-auto ">
                <div className="h-10 w-auto content-end text-xl bg-white ">
                    Images
                </div>
                <div className="text-xs text-white h-auto flex flex-wrap justify-start ">
                    {currentImg.map((t) => {
                            return (
                                <div key={v1()}
                                     className={`w-auto h-8 pr-6 m-1 rounded-2xl content-start border-2 border-black text-left relative `}
                                >
                                    <div
                                        className={`h-auto w-auto text-xl px-2 rounded-tl-2xl rounded-bl-2xl bg-gray-400 top-0 left-0 `}>
                                        {t}
                                    </div>
                                    <span
                                        className="bg-red-300 h-7 w-6 text-xl text-center content-center rounded-tr-2xl rounded-br-2xl absolute top-0 right-0 hover:bg-red-700 cursor-pointer"
                                        onClick={() => onClickDeleteImg(t, localCard._id)}
                                    >
                                    X
                                </span>
                                </div>
                            )
                        }
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default AdminImg;