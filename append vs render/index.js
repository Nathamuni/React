
//The correct way of learning React
//These dependencies are like downloading package.json installed through npm

import React from "./reactfile/react"
import ReactDOM from "./reactfile/react-dom/client"

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

//ReactDOM.render(navbar, document.getElementById("root"))
 // in js v18 we need to create root by  ReactDOM.createRoot(document.getElementById("root")

 ReactDOM.createRoot(document.getElementById("root")).render(navbar)