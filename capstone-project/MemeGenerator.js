import React, {Component} from "react"

/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            toptext:"",
            bottomtext:"",
            randomimage:"http://i.imgflip.com/1bij.jpg"
        }
    }
    
    render() {
        return (
            <div>
                <h1>MEME GENERATOR SECTION</h1>
                <p>
                <img 
                src={this.state.randomimage} 
                alt="Problem?"
            /></p>
            </div>
        )
    }
}

export default MemeGenerator