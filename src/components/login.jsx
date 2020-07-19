import React, { Component } from "react";
import axios from "axios";

import Registration from "./auth/signup";
import Login from "./auth/login";

export default class Home extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.loggedInStatus);
    if(this.props.loggedInStatus == "LOGGED_IN")
        this.props.history.push("/dashboard");
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
 //   this.handleLogoutClick = this.handleLogoutClick.bind(this);


  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

 /* handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }*/

  render() {
    return (
      <div>
       
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}