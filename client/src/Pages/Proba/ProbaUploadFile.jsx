import React, {useCallback, useState} from 'react';
import axios from "axios";

const ProbaUploadFile = () => {
    const [fileName, setFileName] = useState([])

    const uploadTwo = (e) => {
        e.preventDefault()
        console.log("REFRESH prevent")
    }

    const onChange = (e) => {
        setFileName(e.target.files[0])
    }

    const uploadFile = async (e) => {
        e.preventDefault()
        console.log("HELLO", fileName)
        const formData = new FormData

        formData.append("cards", "ProbaNameFile3q")
        formData.append("group", "beton")
        formData.append("myfile", fileName)

        try {
            await axios
                .post('/api/upload/addfile/', formData)
                .then(() => console.log("HELLO"))
        } catch (error) {
            console.log(error)
        }
    }

    const renderFiles =
        <>
            file
        </>

    return (
        <div className="h-auto flex flex-col">
            <div className="h-auto">UPLOAD FILE :</div>
            <div className="">
                <form action="">
                    <input
                        type="file"
                        name="img" required
                        id="formFile"
                        onChange={onChange}
                    />
                    <div className="">
                        <button className="bg-green-600 hover:bg-red-700 hover:text-white rounded-2xl w-1/2 m-4"
                                onClick={uploadFile}
                                type="button"
                        >
                            press to upload
                        </button>
                    </div>
                </form>

            </div>
            <div>
                {renderFiles}
            </div>
        </div>
    );
};

export default ProbaUploadFile;