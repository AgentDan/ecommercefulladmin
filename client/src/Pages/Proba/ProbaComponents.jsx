import React, {useState} from 'react'
import {v1} from "uuid"
import ProbaElems from "./ProbaElems"

const ProbaComponents = ({components, setComponents}) => {

    const onClickMinus = (num) => {
        const newArr = []
        components.map((t) => t.num !== num ? newArr.push(t) : "")
        setComponents(newArr)
    }
    const onChange = (e) => {
        let newArr = components.map(t => t.num === e.target.id ? {...t, name: e.target.value} : t)
        setComponents(newArr)
    }

    const onClickAddComponent = () => {
        let newArr = [...components, {num: v1(), name: "", check: false, elems: []}]
        setComponents(newArr)
    }

    const renderComponents =
        <div>
            {components.map((t, index) => {

                return (
                    <div key={t.num} className="flex flex-col pb-8 my-4 border-2">
                        <div className="flex flex-row my-4">
                            <input className="border-2 bg-white"
                                   type="text"
                                   onChange={onChange}
                                   id={t.num}
                                   placeholder={"Components " + index}
                            />
                            <div
                                className="h-auto w-auto bg-white hover:bg-red-700 hover:text-white px-2 cursor-pointer"
                                onClick={() => onClickMinus(t.num)}
                            >
                                -
                            </div>
                        </div>
                        <div className="pl-12">
                            <ProbaElems components={components} setComponents={setComponents} idComponent={t.num}/>
                        </div>
                    </div>
                )
            })}
        </div>

    return (
        <div className="h-auto w-auto p-4">
            <div className="pl-4 mb-2 bg-gray-500 text-white">
                Components:
            </div>
            <div>
                {renderComponents}
            </div>

            <div
                className="w-8 h-auto border-2 absolute text-center content-center cursor-pointer hover:bg-red-700 hover:text-white rounded-2xl"
                onClick={() => onClickAddComponent()}
            >
                +
            </div>
        </div>
    );
};

export default ProbaComponents;