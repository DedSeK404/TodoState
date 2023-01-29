import { Component } from "react";
import { TodoItem } from "./TodoItem";

export class Tasklist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.listtodo.map((el) => (
          <TodoItem key={el.id} completetask={this.props.completetask} deletetask={this.props.deletetask} todo={el} />
        ))}
      </>
    );
  }
}
