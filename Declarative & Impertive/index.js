//====================Imperative way=========================
//Imperative - Describe to me how to do something then I'll do it

const h1 = document.createElement("h1")
h1.textContent="Hello, React! 1"
h1.className ="header"
document.getElementById("root").append(h1)

//👆to just create a static line of code in js it takes lot of lines there by complicates

//---------------It's---Declarative---Nature------------------------
//Declarative nature means we can jus say what should be done and it takes care of all querks
//=======This is equivalent code for Declarative way👇=======

ReactDOM.render(<h1 className="header">Hello, React! 2</h1>, document.getElementById("root"))
