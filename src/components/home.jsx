import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";
import Homey from './offline/home.jsx';



function UserGreeting(props) {
  return <h1>Main Menu</h1>;
}

function GuestGreeting(props) {
  return (
  	<div>
    <Homey/>
  
         </div>
  	);
}


const Home = props => {


  const isLoggedIn = props.loggedInStatus;
  if (isLoggedIn == "NOT_LOGGED_IN") {
    return <GuestGreeting />;
  }
  return <UserGreeting />;
};


export default Home;