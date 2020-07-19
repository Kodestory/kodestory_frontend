import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";
import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import axios from "axios";


const useStyles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 0,
    fontSize: 30
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

function MobileMenu(props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <LocalAtmIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <LocalAtmIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    
    </Menu>
  );
}

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        console.log(response);
        console.log(this.props);
        this.props.handleLogout();
        this.props.history.push("/");

      })
      .catch(error => {
        console.log("logout error", error);
      });
  }





  render(){
  
      const {classes} = this.props;

    return(
        
        <HashRouter>


    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>


          <IconButton component={Link} to="/"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="logo"
          >
            <FlightTakeoffIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            KodeStory

          </Typography>
          {/*<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>*/}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

           


           <MenuItem component={Link} to="/dashboard">
           <IconButton aria-label="All Projects" color="inherit">
              <Badge color="secondary">
                  <AllInboxIcon />
              </Badge>
            </IconButton>
            <p>All Projects</p>
            </MenuItem>


            <MenuItem component={Link} to="/newproject">
             <IconButton aria-label="Create New Project" color="inherit">
              <Badge color="secondary">
                  <AddBoxIcon />
              </Badge>
            </IconButton>
            <p> New Project </p>
            </MenuItem>

           <MenuItem component={Link} to="/settings">
            <IconButton aria-label="settings" color="inherit">
              <Badge color="secondary">
                 <SettingsIcon />
              </Badge>
            </IconButton>
            <p>Settings</p>
            </MenuItem>

           

            <MenuItem onClick={() => this.handleLogoutClick()}>
             <IconButton  className={classes.menuButton} aria-label="logout" color="inherit">
              <Badge color="secondary">
                 <ExitToAppIcon />
              </Badge>
            </IconButton>
            <p> Logout </p>
           </MenuItem>
          </div>
         
        </Toolbar>
      </AppBar>
      <MobileMenu />
    </div>
</HashRouter>

      );
  }
}


export default withStyles(useStyles)(NavBar)
