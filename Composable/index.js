 ReactDOM.render(<h1>Hello, everyone!</h1>, document.querySelector("#root"))
//>>>>>>>>>>>    render(`what` , `where`)     <<<<<<<<<<<<

ReactDOM.render(    
<ul>
    <li>Awesome Challenge</ li>
    <li>Intutive Challenge</li>
</ul>,
document.getElementById("root")
)

//---------------It's---Composable---Nature------------------------
// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says something

function MainContent(){
    return (
        <h1>This is a simulation of custom tag</h1>
    )
}

ReactDOM.render(
    <div>
         <MainContent />   {/*This is a custom react component*/}
    </div>,
    document.getElementById("root")
)

