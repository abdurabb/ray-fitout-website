import React from "react";
import { Outlet, useLocation } from "react-router-dom";

function Content() {
    return (
        // min-h-screen
        <div className="  ">
            <Outlet />
        </div>
    );
}

export default Content;
