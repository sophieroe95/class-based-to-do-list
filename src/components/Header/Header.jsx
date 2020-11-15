import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  // state = {
    
  // };

  // componentDidMount() {
  //   this.setRandomUser();
  // }

  // setRandomUser = () => {
  //   // 4. Do a fetch
  //   fetch('https://randomuser.me/api/')
  //       .then(response => response.json())
  //       .then(response => {
  //       ;
  //         this.setState({ randomUser: response[0].name.first});
  //         console.log(response)
  //       });}

     

        render() {
          // const {randomUser} = this.state
    return (
      
      <>
      <img src={this.props.picture} alt=""/>
    
        <p><span>{this.props.name}</span> you have <span className={styles.number}>{this.props.tasks}</span> to dos left to do in {this.props.city} </p>
      </>
    );
  }
}

export default Header;
