import React from 'react'
import {Link} from "react-router-dom"

const AdminProba = () => {
    localStorage.setItem("checkCards", "0")

    return (
        <>
            <Link to={"/admin197908/info"}>CLICK ME</Link>
        </>
    )
}
export default AdminProba;