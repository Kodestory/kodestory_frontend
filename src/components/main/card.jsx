import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          https://github.com/vaibhavgeek/chaturbots
        </Typography>
        <Typography variant="h4" component="h2">
        <Link to="/project/chaturbots">  @vaibhavgeek/chaturbots </Link>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          last updated 2 days ago
        </Typography>
        <Typography variant="body2" component="p">
        commit <Link to="/">96b6bdac1e7ac17c6731a97e0181e495d13ab53f</Link> on branch <b>master</b> by <Link to="/">@vaibhavgeek</Link> 
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">EXPLORE</Button>
      </CardActions>
    </Card>
  );
}
