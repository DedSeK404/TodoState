import React from "react";
import { useState } from 'react'; 
import { ToDo } from "./ToDo";



export const ToDoInput = () => {
    

    const [components, setComponents] = useState(<ToDo/>); 
    
    function addComponent() {
        setComponents([components, <ToDo/>]) 
    }
   
    
    return(
        <div className="Input_box">
            <p className="p_todoInput">Type your ToDo here</p>
            <input className="Input_ToDo" type="text" placeholder='Type here' />
            <button className="Btn_Add" onClick={addComponent} >Add</button>
        </div>
    )

}