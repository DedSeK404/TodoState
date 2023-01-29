import { Component } from "react";
import Logo from "../Logo.png";

export class Nav extends Component{
    render(){
        return(
            <header className="Header">
                <img className="Logo" src={Logo} alt="0"/>
                <div>
                <button className="Link">Home</button>
                <button className="Link">News</button>
                <button className="Link">ToDo</button>
                <button className="Link">Contact</button>
                </div>
                <input type="text" placeholder='Search' />
            </header>
        )
    }
}