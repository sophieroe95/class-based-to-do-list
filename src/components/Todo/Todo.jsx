import React, { Component } from "react";
import styles from "./Todo.module.scss";

class Todo extends Component {
  render() {
    return (
    <div className={styles.todo}>
    <p>{this.props.content}</p>
    <button onClick={()=> this.props.onDelete(this.props.id)}>Done!</button>
    </div>
    );
  }
}

export default Todo;
