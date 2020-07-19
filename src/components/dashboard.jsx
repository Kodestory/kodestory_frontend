
import React, { Component } from "react";
import axios from "axios";
import NavBar from './main/topnav';
import  Container from '@material-ui/core/Container';
import {
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";

import Project from './main/card';


export default class Dashboard extends Component {
 

  render() {
    return (
      <div>        
      <Container fixed>
        <NavBar handleLogout={this.props.handleLogout} history={this.props.history}/>
       <h1> All Projects </h1>
       <Project/>


      </Container>
      </div>
    );
  }
}