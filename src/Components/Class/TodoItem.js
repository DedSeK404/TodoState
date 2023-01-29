import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

export class TodoItem extends Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        return(
            <div className="ToDo_container">
          <div className="ToDo_p_i">
            <input onChange={()=> this.props.completetask(this.props.todo.id)} className="input" type="checkbox" checked={this.props.todo.isDone}/>
            <p className="ToDo_P">{this.props.todo.name}</p>
          </div>
          <div className="ToDo_Buttons_container">
            <button className="ToDo_Btn">
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button onClick={()=> this.props.deletetask(this.props.todo.id)} className="ToDo_Btn">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="ToDo_Btn">
              <FontAwesomeIcon icon={faList} />
            </button>
          </div>
        </div>
        )
    }
}