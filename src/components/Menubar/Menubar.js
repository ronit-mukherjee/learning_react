import React from 'react';
import {NavLink} from 'react-router-dom';

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
        },
        {
            id: 5,
            name: "Our team",
            url: "/our-team"
        }
    ]

    return (
        <div id={"menubar"}>
            <ul>
                {
                    menus.map((menu, index) => {
                        return (
                            <li key={index}>
                                <NavLink exact to={(menu.url).toLowerCase()} activeClassName="active"
                                         >{menu.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Menubar;