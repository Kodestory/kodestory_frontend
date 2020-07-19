import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import Play from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';

import * as Colors from '@material-ui/core/colors';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
    alignSelf: 'stretch' ,
  },
  margin: {
    margin: 10
  },
  button: {
    fontSize: "2em"
  }  
});

const styles = {
  button: {
    width: 164, height: 164,
    padding: 0,
  },
  icon: {
    width: 164, height: 164,
  },
};

  const muiTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#fff"
    }
  }
});

function valuetext(value) {
  return `${value}°C`;
}
  

class Sliderr extends React.Component  {
  constructor(props)
  {
    super(props)
  }
  render(){
    const {classes} = this.props;
    let button;
    if(this.props.state =="play")
    {
      button =  <IconButton onClick={this.props.handleplay} edge="start" color="primary" aria-label="menu">
    <Play/>
    </IconButton>;
    }
    else
    {
      button = 
    <IconButton onClick={this.props.handlepause} edge="start" color="primary" aria-label="menu">
    <Pause/>
    </IconButton>
    }
    return (

   <div className={classes.root}>
    <ThemeProvider  theme={muiTheme}>

     <AppBar position="static" color="secondary">
  <Toolbar>
    
{button}
   
     <Slider className={classes.margin}
        getAriaValueText={valuetext}
        onChange={this.props.sliderChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks={this.props.sdd}
        min={0}
        max={100}
        disabled={this.props.slideren}
        value={this.props.value}
    />

       <TextField shrink value="0"
            variant="outlined"
            id="email"
            label="From Commit Number"
            name="fc_n"
            autoComplete="fc_n"
          />

           <TextField shrink value="0"
            variant="outlined"
            id="email"
            label="To Commit Number"
            name="fc_n"
            autoComplete="fc_n"

          />
  </Toolbar>
</AppBar>
</ThemeProvider>
      <Typography id="discrete-slider" gutterBottom>
        
      </Typography>
     
     
     
    </div>


  );
}
}

export default withStyles(useStyles)(Sliderr);