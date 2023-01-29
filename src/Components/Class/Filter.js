
import { Component } from "react"

export class Filtertodo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Button_container">
                    <button onClick={()=> this.props.info("Done")} className="Body_Button">Done</button>
                    <button onClick={()=> this.props.info("UnDone")}className="Body_Button">Not done yet</button>
                    <button onClick={()=> this.props.info("All")}className="Body_Button">All</button>
                </div>
        )
    }
}