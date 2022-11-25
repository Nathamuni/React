
//The correct way of learning React
//These dependencies are like downloading package.json installed through npm

import React from "react"
import ReactDOM from "react-dom"
//here on react the jsx  syntax is defined
const navbar = (
    <nav>
        <h1>navbar example</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))