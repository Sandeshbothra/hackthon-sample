import React from "react";
import AppTopBar from "../main-topbar/Topbar";
import AppFooter from "../app-footer/Footer";

const MainLayout = (props) => {
    return (
        <div>
            <AppTopBar />
                {props.children}
            <AppFooter />
        </div>
    )
}

export default MainLayout;