import React, {useState} from 'react'
import {v1} from "uuid"

const ProbaElems= ({components, setComponents, idComponent}) => {
    const [arr, setArr] = useState([])

    const onChange = (e) => {
        let newArr = arr.map(t => t.num === e.target.id ? {...t, name: e.target.value} : t)
        setArr(newArr)
        setComponents(components.map(t => t.num === idComponent ? {...t, elems: newArr} : t))
    }
    const onClickAddField = () => {
        let newArr = [...arr, {num: v1(), name: ""}]
        setArr(newArr)
        setComponents(components.map(t => t.num === idComponent ? {...t, elems: newArr} : t))
    }
    const onClickMinus = (num) => {
        const newArr = []
        arr.map((t) => t.num !== num ? newArr.push(t) : "")
        setArr(newArr)
        setComponents(components.map(t => t.num === idComponent ? {...t, elems: newArr} : t))
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
                               placeholder={"file "+index}
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
        <>
            {renderComp}
            <div
                className="w-8 h-auto border-2 absolute text-center content-center cursor-pointer hover:bg-red-700 hover:text-white rounded-2xl"
                onClick={() => onClickAddField()}
            >
                +
            </div>
        </>
    )
}

export default ProbaElems;
