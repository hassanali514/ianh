import React, { Fragment } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainHeader = () => {

    

    return (
        <Fragment>
            <Sidebar />
            <Outlet />
        </Fragment>
    )
}

export default MainHeader