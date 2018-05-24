import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

import './Menubar.css';

const Menubar = () => {
    const menus = [
        {
            id: 1,
            name: "Home",
            url:"/"
        },
        {
            id: 2,
            name: "About",
            url: "/about"
        },
        {
            id: 3,
            name: "Countries",
            url: "/countries"
        },
        {
            id: 4,
            name: "Contact",
            url: "/contact"
        }
    ]

    return (
        <div id={"menubar"}>
            <ul>
                {
                    menus.map((menu, index) => {
                        return (
                            <li>
                                <NavLink exact="true" to={(menu.url).toLowerCase()} activeClassName="active"
                                         key={index}>{menu.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Menubar;