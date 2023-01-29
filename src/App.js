import Tdl from "./Components/tdl.png";
import "./App.css";
import { Nav } from "./Components/Class/Nav";
import { Addtodo } from "./Components/Class/Addtodo";

import { Footer } from "./Components/Footer";

import { Filtertodo } from "./Components/Class/Filter";
import { Tasklist } from "./Components/Class/TaskList";
import { Component } from "react";
import { list } from "./data";

class App extends Component {
  state = { listtodo: list , info: "All"};

  handleAdd = (newtask) => {
    // console.log(newtask)
    this.setState({ listtodo: [...this.state.listtodo, newtask] });
  };
  handleDelete = (deletetask) => {
    this.setState({
      listtodo: this.state.listtodo.filter((el) => el.id != deletetask),
    });
  };
  handleComplete = (idtask) => {
    // console.log(idtask)

    this.setState({
      listtodo: this.state.listtodo.map((el) =>
        el.id == idtask ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };
  handleFilter = (info) => {
    console.log(info);
    this.setState({
      info: info
        
    });
  };
  render() {
    return (
      <>
        <div className="Main_Container">
          <Nav />
          <img className="tdl" src={Tdl} alt="0" />
          <Addtodo handleAdd={this.handleAdd} />
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <div className="Body">
            <Filtertodo info={this.handleFilter} />
            <Tasklist
              completetask={this.handleComplete}
              deletetask={this.handleDelete}
              listtodo={this.state.info == "Done"
              ? this.state.listtodo.filter((el) => el.isDone)
              : this.state.info == "Done"
              ? this.state.listtodo.filter((el) => el.isDone)
              : this.state.listtodo}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
