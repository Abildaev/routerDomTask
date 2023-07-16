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
                <NavLink to="/" style={{color: 'white'}}>Main</NavLink>
            </li>
            <li>
                <NavLink to="/characters" style={{color: 'white'}}>Characters</NavLink>
            </li>
            <li>
                <NavLink to="/episodes" style={{color: 'white'}}>Episodes</NavLink>
            </li>
            <li>
                <NavLink to="/locations" style={{color: 'white'}}>Locations</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;