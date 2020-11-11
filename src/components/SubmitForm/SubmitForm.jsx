import React, { Component } from "react";
import styles from "./SubmitForm.module.scss";

class SubmitForm extends Component {

  state = { 
    entry: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.entry);
    this.setState({entry: ""});
  }

  render() {
    return (
     <form className = {styles.form} onSubmit={this.handleSubmit}>
       <input className={styles.inputBox} type="text"
        placeholder="Add a to do"
         value={this.state.entry}
       onChange={(e) => this.setState({entry: e.target.value})}/>
       <button className={styles.submitButton} type="submit">Add</button>
     
     </form>
    );
  }
}

export default SubmitForm;
