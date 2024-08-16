import React, {useCallback, useEffect, useState} from 'react'
import axios from "axios";
import {div} from "three/examples/jsm/nodes/math/OperatorNode";
import {v1} from "uuid";
import {Link} from "react-router-dom";

const AdminUploadFile = () => {
    const [stateUploads, setStateUploads] = useState([])
    const [fileName, setFileName] = useState([])

    const upload = localStorage.getItem("upload")
    const localCard = JSON.parse(upload)

    const getCloudFiles = useCallback(async () => {
        try {
            await axios.get('/api/upload', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setStateUploads(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [stateUploads])
    const onChangeFile = (e) => {
        let a = stateUploads.find(t => {return t.img === e.target.files[0].name})
        if (a) {
            alert("This file already exists")
        }
        else {setFileName(e.target.files[0])}
    }

    const interfile = useCallback(async (e) => {

        const formData = new FormData()

        formData.append("cards", localCard.name)
        formData.append("group", localCard.project)
        formData.append("myfile", fileName)

        try {
            await axios
                .post(`/api/upload/addfile/`, formData)
                .then((res) => window.location.reload())
        } catch (error) {
            console.log(error)
        }
    })

    const onClickDELETE = useCallback(async (id) => {
        try {
            await axios.delete(`/api/upload/deleteblog/${id}`, {id}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => setStateUploads(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [getCloudFiles])

    useEffect(() => {
        getCloudFiles()
    }, [])

    const rend =
        <>
            <div
                className="h-auto bg-gray-600 mt-4 rounded-bl-2xl rounded-tr-2xl text-2xl text-white text-center content-center relative">
                {localCard.project}
                <span
                    className="bg-red-500 h-4 w-auto text-xs text-white text-center content-center rounded-2xl absolute top-0 left-0 px-2 ml-3 -mt-2">
                    project
                </span>
            </div>

            <div
                className="h-auto bg-gray-600 mt-4 rounded-bl-2xl rounded-tr-2xl text-2xl text-white text-center content-center relative">
                {localCard.name}
                <span
                    className="bg-green-600 h-4 w-auto text-xs text-white text-center content-center rounded-2xl absolute top-0 left-0 px-2 ml-3 -mt-2">
                    card
                </span>
            </div>

            <div className="h-auto bg-gray-400 mt-4 rounded-bl-2xl rounded-tr-2xl text-center content-center">
                Images
            </div>
            {
                localCard.images.map((t) => {
                        return (<div key={v1()} className="h-auto">{t}</div>)
                    }
                )
            }
            <div
                className="h-auto bg-gray-400 mt-4 rounded-bl-2xl rounded-tr-2xl text-center content-center shadow-2xl ">
                Models
            </div>
            {
                localCard.components.map((t, index) => {
                    return (<span key={v1()}>
                            <div
                                className="h-auto bg-gray-300 mt-4 rounded-bl-2xl rounded-tr-2xl text-center content-center shadow-2xl "
                            >
                                {t.name}
                            </div>
                            <div>
                                {
                                    t.elems.map((t, index) => {
                                            return (<div key={v1()} className="h-auto">{t.name}</div>)
                                        }
                                    )
                                }
                            </div>
                        </span>
                    )
                })
            }
        </>

    return (
        <div className="h-auto border-gray-500 p-2 mb-4 flex flex-row ">
            <div className="m-4">
                <Link to={'/admin197908/info'}>
                    <div
                        className="h-auto bg-blue-600 w-1/3 text-white rounded-2xl content-center text-center hover:bg-red-800 cursor-pointer">
                        Go back
                    </div>
                </Link>
                <form className=" bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8 mb-4"
                      encType="multipart/form-data">
                    <div>
                        <input
                            type="file"
                            name="img" required
                            onChange={onChangeFile}
                            id="formFile"
                        />
                    </div>

                    <div className="flex items-center justify-between"
                    >
                        <button
                            className="bg-gray-400 hover:bg-green-700 text-xl rounded-2xl text-white font-bold mt-4 py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={interfile}>
                            Add
                        </button>
                    </div>
                </form>
                {rend}
            </div>
            <div className="m-4">
                {
                    stateUploads.map((t) => {
                        if (t.cards === localCard.name) {
                            return (
                                <div key={v1()}
                                     className={`w-auto h-8 pr-6 m-1 rounded-2xl content-start border-2 border-black text-left relative `}
                                >
                                    <div
                                        className={`flex flex-row h-auto w-auto text-white text-xl px-2 rounded-tl-2xl rounded-bl-2xl bg-gray-400 top-0 left-0`}
                                    >
                                        <div className="w-4/6">
                                            {t.img}
                                        </div>
                                    </div>

                                    <span
                                        className="bg-red-300 h-7 w-6 text-xl text-white text-center content-center rounded-tr-2xl rounded-br-2xl absolute top-0 right-0 hover:bg-red-700 cursor-pointer"
                                        onClick={() => onClickDELETE(t._id)}
                                    >
                                    X
                                </span>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="m-4">
            </div>
        </div>
    );
};

export default AdminUploadFile;