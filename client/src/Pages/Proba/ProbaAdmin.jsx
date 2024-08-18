import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"

const ProbaAdmin = () => {
    const [pass, setPass] = useState()
    const navigate = useNavigate()

    const onClickPass = () => {
        if (pass === "9929") {
            navigate('/proba')
        }
    }

    return (
        <div className="h-auto p-5">
            <div className="flex flex-row">
                <div className="h-auto w-64">
                    <input type="password"
                           className="bg-gray-200"
                           onChange={e => setPass(e.target.value)}
                    />
                </div>
                <div className="h-auto w-6 ml-3 hover:bg-red-700 cursor-pointer rounded-2xl"
                     onClick={() => onClickPass()}
                >
                </div>
                <div className="h-auto w-auto ml-32 text-white hover:text-gray-100">Car School</div>
            </div>
        </div>
    )
}

export default ProbaAdmin