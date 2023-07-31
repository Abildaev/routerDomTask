import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import NavBar from "../navBar/NavBar";
import {useAuth} from "../../context/AuthProvider";

function PrivateRoute() {

    const auth = useAuth()

    return auth.user
        ?
        (
            <div>
                <NavBar/>
                <div className="App">
                    <Outlet/>
                </div>
            </div>
        )
        :
        <Navigate to="/login" replace/>
}

export default PrivateRoute;