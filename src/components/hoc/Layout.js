import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../navBar/NavBar";

function Layout(props) {
    return (
        <div >
            <NavBar/>
            <div className="App">
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;