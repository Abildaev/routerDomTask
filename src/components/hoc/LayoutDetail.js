import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../navBar/NavBar";
import GoToBack from "../goToBack/GoToBack";

function LayoutDetail(props) {
    return (
        <div>
            <NavBar/>
            <div className="App">
                <GoToBack/>
                <Outlet/>
            </div>

        </div>
    );
}

export default LayoutDetail;