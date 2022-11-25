//JSX Javascript xml - is a flavor of javascript looks likes html 
//> with its introduction in React it becomes DELARATIVE
// little querks like className insted of class

//==============REGULER DOM ELEMENT================
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

//on console loging the DOM element by document.createElement   
//👆OUTPUT› <h1 class="header">

//====================== JSX =========================

const element = <h1 className="header">This is JSX</h1>
console.log(element)
//What React creates with JSX is plain js objects,
//that describes the DOM element that the react put on to the page
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
*/ 

ReactDOM.render(element, document.getElementById("root"))

/*JSX is kinda like a function when its run creates OBJECTS which React can 
use to create actual element*/




//****************************************************************************** */

ReactDOM.render(
    <div>
        <h1 className="header">This can only return a single parent element</h1>
        <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)

// We can also store bunch of JSX on to a variable 

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This can only return a single parent element</p>
//     </div>
// )

// ReactDOM.render(
//     page,
// document.getElementById("root")
// )

