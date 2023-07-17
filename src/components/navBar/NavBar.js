import React from 'react';
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
        <ul style={
            {listStyleType: "none",
                display: "flex",
                justifyContent: "space-around",
                background: 'gray',
                padding: "20px"
            }}>
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? "navActive" : "notActive"}
                >Main</NavLink>
            </li>
            <li>
                <NavLink
                    to="/characters"
                    className={({isActive}) => isActive ? "navActive" : "notActive"}
                >Characters</NavLink>
            </li>
            <li>
                <NavLink
                    to="/episodes"
                    className={({isActive}) => isActive ? "navActive" : "notActive"}
                >Episodes</NavLink>
            </li>
            <li>
                <NavLink
                    to="/locations"
                    className={({isActive}) => isActive ? "navActive" : "notActive"}
                >Locations</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;