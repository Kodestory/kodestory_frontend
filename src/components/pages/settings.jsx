import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";
import NavBar from './../main/topnav';
import  Container from '@material-ui/core/Container';

export default class Settings extends React.Component {

	render()
	{
		return(
			<Container fixed>
        	<NavBar handleLogout={this.props.handleLogout} history={this.props.history}/>
        <h1>Settings </h1>

     	 </Container>
      );
	}
}