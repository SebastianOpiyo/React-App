// 1. componentsDidMount() {}
// 2. componentDidUpdate() {}


//  we use componentDidMount(){} to fetch API

import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
    	// we set the state to true by passing an object directly to it 
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                	// we have to set the state to false otherwise it will load forever.
                    loading: false,
                    character: data
                })
            })
    }
    
    render() {
    	// if the state is true will display `loading` otherwise the name.
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App
