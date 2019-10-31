import React from "react"

/*this is a component that returns a question and joke. Where there is no question we render nothing.*/
function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke


//  RENDETING CONDITIONALLY PART OF A PAGE.

// app.js

import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App


// Conditional.js
import React from "react"

function Conditional(props) {
    return (
        <div>
            <h1>Navbar</h1>
            
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
            
            <h1>Footer</h1>
        </div>
    )
    
}

export default Conditional

// Besides the tenary operator we can also make use of the `&&` logic operator. 
// props.isLoading === true && <h1>Loading...</h1> 
// the above statement will only work if the state is true otherwise it will return null


// index.js

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))


// index.html

<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>