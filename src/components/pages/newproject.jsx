import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";
import NavBar from './../main/topnav';
import  Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { fade, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class NewProject extends React.Component {

	render()
	{
          const {classes} = this.props;

		return(

      <Container fixed>
        <NavBar handleLogout={this.props.handleLogout} history={this.props.history}/>
               <h1>New Project </h1>
                <Card>
      <CardContent>
  <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="git"
            label="GIT Link"
            name="gitlink"
            autoComplete="gitlink"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="SSH Username"
            name="sshusername"
            autoComplete="sshusername"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="ssh-password"
            label="SSH Password"
            type="ssh-password"
            id="ssh-password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          Create Project
          </Button>
         
        </form>
</CardContent>
</Card>


      </Container>);
	}
}

export default withStyles(useStyles)(NewProject)
