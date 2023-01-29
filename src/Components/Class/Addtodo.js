import { Component } from "react";

export class Addtodo extends Component{
    constructor(props){
        super(props)
        this.state={
            nametodo:""
        }
    }
handleChange = (value) => {
this.setState ({nametodo: value})
}
add = () =>{
    const newtask={name: this.state.nametodo, isDone: false, id: Math.random() }
    this.props.handleAdd(newtask)
}
    
    render(){
        return(
            <div className="Input_box">
            <p className="p_todoInput">Type your ToDo here</p>
            <input onChange={(e)=> this.handleChange(e.target.value)} className="Input_ToDo" type="text" placeholder='Type here' />
            <button className="Btn_Add" onClick={()=> this.add()}>Add</button>
        </div>
        )
    }
}