import React, {useState} from 'react'
import {v1} from "uuid"

const ProbaImage = ({setImages, images}) => {
    const [arr, setArr] = useState([])
    console.log("IMEGES newArr: ", arr)
    console.log("IMEGES images: ", images)

    const onChange = (e) => {
        let newArr = arr.map(t => t.num === e.target.id ? {...t, description: e.target.value} : t)
        setArr(newArr)
        let a = []
        newArr.map(t => a.push(t.description))
        console.log("A : ", a)
        setImages(a)
    }
    const onClickAddField = () => {
        let newArr = [...arr, {num: v1(), description: ""}]
        setArr(newArr)
        let a = [...images, {}]
        setImages(a)
    }
    const onClickMinus = (num) => {
        const newArr = []
        arr.map((t) => t.num !== num ? newArr.push(t) : "")
        setArr(newArr)
        let a = []
        newArr.map(t => a.push(t.description))
        setImages(a)
    }

    const renderComp =
        <div className="h-auto">
            {arr.map((t, index) => {
                return (
                    <div key={t.num}  className="flex flex-row">
                        <input className="border-2"
                               type="text"
                               onChange={onChange}
                               id={t.num}
                               placeholder={"image "+index}
                        />
                        <div className="h-auto w-auto hover:bg-red-700 hover:text-white px-2 cursor-pointer"
                            onClick={() => onClickMinus(t.num)}
                        >
                            -
                        </div>
                    </div>
                )
            })}
        </div>

    return (
        <div className="h-auto w-auto p-4">
            <div className="pl-4 mb-2 bg-gray-500 text-white">
                Images:
            </div>
            <div>
                {renderComp}
            </div>
            <div
                className="w-8 h-auto border-2 absolute text-center content-center cursor-pointer hover:bg-red-700 hover:text-white rounded-2xl"
                onClick={() => onClickAddField()}
            >
                +
            </div>
        </div>
    )
}

export default ProbaImage;
