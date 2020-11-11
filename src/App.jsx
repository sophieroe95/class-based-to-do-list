import React, {Component } from 'react';
import Header from './components/Header';
import styles from "./App.module.scss";
import TodoList from './components/TodoList';
import SubmitForm from './components/SubmitForm';

class App extends Component {
  state = {
    tasks: ['wash dishes', 'wash car', 'food shopping']
    }

    handleDelete = (index) => {
      const newArray = [...this.state.tasks];
      newArray.splice(index,1);
      this.setState({tasks:newArray});
    }

    handleSubmit = (task) => {
      this.setState({tasks:[...this.state.tasks, task]})
    }
  render() { 
    return (
      <div className={styles.page}>
    <div className={styles.container}>
      <h1>To Do List</h1>
      <Header tasks={this.state.tasks.length} />
      <TodoList 
      tasks={this.state.tasks}
      onDelete={this.handleDelete}/>
      <SubmitForm onFormSubmit={this.handleSubmit}/>
    </div>
    </div>
    );
  }
}
 
export default App;
