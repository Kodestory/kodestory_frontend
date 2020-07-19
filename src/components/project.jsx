import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from './main/topnav';

import SimpleTabs from './main/tabview';
import ControlledTreeView from './main/treeview';
import DiscreteSlider from './main/seeker';

const useStyles = theme => ({
   root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height: 550,
    "overflow-y": "auto"
  }

});


let seeker_data =  [
  {
    value: 0,
    label: 'comm #1',
  },
  {
    value: 20,
    label: 'comm #2',
  },
  {
    value: 37,
    label: 'comm #3',
  },
  {
    value: 90,
    label: 'comm #4',
  },
];

let dataa = {
                id: 'root',
                name: 'Parent',
                children: [
                              {
                                 id: '1',
                                 name: 'Child - 1',
                              },

                              {
                                  id: '3',
                                  name: 'Child - 3',
                                      children: [
                                              {
                                                    id: '4',
                                                    name: 'Child - 4',
                                              },
                                                ],
                              },
                          ],
            }


class Project extends Component {
  constructor(props){
    super(props)
    
    this.state ={ 
      classname: "popup",
      data: dataa,
      c_commit: "0",
      c_file: "blah blah blah",
      seeker_state: "play",
      slideren: false,
      svalue: 50,
      seeker_data: seeker_data
      };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
  }

   handlecommit(c_commit) 
   {
      var p_commit = this.state.c_commit
      this.setState({c_commit: c_commit});

      axios
      .get("URL",{
          params: {
            project_id: "password",
            id: "token",
            user_id: "id",
            p_commit: p_commit,
            c_commit: c_commit
          }
        })
      .then(response => {
        console.log(response);
        // change data and set it accordingly. 
      })
      .catch(error => {
        console.log("login error", error);
      });  
  }

  handlefilecontent(commit, file_path, file_name)
  {
    this.setState({c_file: "file_name"})

    axios
    .get("URL",{
      params: {
        commit: commit,
        file_path: file_path,
        project_id: "project_id",
        user_id: "user_id"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log("error file content", error);
    });
  }
  sliderChange(event)
  {
    console.log(event);
  }
  handlePlay(){
    
    var valincrease = this.state.svalue;
    valincrease = valincrease + 10;

    this.setState({classname: "popupv"});
    setTimeout(
      function(){ 
        this.setState({classname: "popup"}); 
      }.bind(this), 4000);
    
    this.setState({seeker_state: "pause" , svalue: valincrease})
    console.log("hello world from handlePlay");
  }
  handlePause(){
        this.setState({seeker_state: "play"})
        console.log("hello world from handlePause");
  }

  render(){
      const {classes} = this.props;
      
  return (
    <Container fixed>
        <NavBar handleLogout={this.props.handleLogout} history={this.props.history}/>
       <h1> @vaibhavgeek/chaturbots </h1>
       <div class={this.state.classname}> 
       <h1> Commit 96b6bdac1e7ac17c6731a97e0181e495d13ab53f by @vaibhavgeek </h1>
       <br/>
       <h2>
       <ul> 
       <li style={{color:"green"}}> +13 files added </li> 
       <li style={{color:"red"}}> -10 files removed </li> 
       <li> 10 files removed </li> 
       <li> 10 files removed </li> 
       </ul>
       </h2>

        </div>
     <Grid container spacing={2}>

        <Grid item xs={3}>
          <Paper className={classes.paper}><ControlledTreeView data={this.state.data}/></Paper>
        </Grid>


         <Grid item xs={9}>
          <Paper className={classes.paper}><SimpleTabs content={this.state.c_file}/></Paper>
        </Grid>

         <Grid item xs={12}>         
          <Paper>
            <DiscreteSlider sliderChange={this.sliderChange} sdd={this.state.seeker_data} slideren={this.state.slideren} value={this.state.svalue} state={this.state.seeker_state} handleplay={this.handlePlay} handlepause={this.handlePause} /> 
          </Paper>
        </Grid>

      </Grid>
       </Container>
  );
}
}

export default withStyles(useStyles)(Project);
