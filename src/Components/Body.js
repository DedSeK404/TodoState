import React from "react"
import { ToDo } from "./ToDo"


export const Body = () => {

 

        return (
            <div className="Body">
                <div className="Button_container">
                    <button className="Body_Button">Done</button>
                    <button className="Body_Button">Not done yet</button>
                    <button className="Body_Button">All</button>
                </div>
                
                <ToDo />
                <ToDo />
                <ToDo />
                <ToDo />
            </div>
        )
    
}