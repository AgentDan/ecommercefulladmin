import {Navigate, Outlet} from "react-router-dom";

const PRouter = () => {
    const token = localStorage.getItem("userData")

    return token ? <Outlet/> : <Navigate to=""/>
}

export default PRouter;