import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {v1} from "uuid"
import {div} from "three/examples/jsm/nodes/math/OperatorNode";

const ProbaUploadFile = () => {
    const [fileName, setFileName] = useState([])
    const [stateUploads, setStateUploads] = useState([])

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    }

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

    const interfile = useCallback(async (e) => {

        const formData = new FormData()

        formData.append("cards", localStorage.getItem('localCardName'))
        formData.append("group", localStorage.getItem('localProject'))
        formData.append("cardnumber", localStorage.getItem('localCard'))
        formData.append("myfile", fileName)

        try {
            await axios
                .post('/api/upload/addfile/', formData)
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

    return (
        <div className="h-auto flex flex-col">
            <div className="">
                <form encType="multipart/form-data">
                    <input
                        type="file"
                        name="img" required
                        onChange={onChangeFile}
                        id="formFile"
                    />
                    <div className="">
                        <button className="bg-green-600 hover:bg-red-700 hover:text-white rounded-2xl w-1/2 m-4"
                                type="button"
                                onClick={interfile}
                        >
                            press to upload
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-gray-400 h-auto rounded-tr-2xl rounded-bl-2xl text-center content-center mb-2">
                FILES :
            </div>
            <div className="h-auto">
                {stateUploads.map((t) => {
                    if (t.cardnumber === localStorage.getItem('localCard')) {
                        return (
                            <div key={v1()}
                                 className={`w-auto h-8 pr-6 m-1 rounded-2xl content-start border-2 border-black text-left relative `}>
                                <div className="h-auto text-xl w-auto px-2 rounded-tl-2xl rounded-bl-2xl top-0 left-0"
                                >
                                    {t.img}
                                </div>
                                <div
                                    className="bg-red-300 h-7 w-6 text-center content-center rounded-tr-2xl rounded-br-2xl absolute top-0 right-0 hover:bg-red-700 hover:text-white cursor-pointer"
                                    onClick={() => onClickDELETE(t._id)}
                                >
                                    X
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
        ;
};

export default ProbaUploadFile;