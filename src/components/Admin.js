import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Button2 from '@material-ui/core/Button';
import {Button} from 'react-bootstrap'
import { withStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
}));

 function Admin(props) {
  const classes1 = useStyles();
  const { classes } = props;

  return (
    <Grid container component="main" className={classes1.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes1.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      {/* <>
  <Button variant="primary"  className={classes.button}>Primary</Button>{' '}
  <Button variant="secondary"  className={classes.button}>Secondary</Button>{' '}
  <Button variant="success"  className={classes.button}>Success</Button>{' '}
  <Button variant="warning"  className={classes.button}>Warning</Button>{' '}
  <Button variant="danger" className={classes.button}>Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light" className={classes.button}>Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link" className={classes.button}>Link</Button>
</> */}
          



          <Link to="/allUers" className="nav-link">

     <Button2 variant="contained" color="primary" className={classes.button}>
        
        Users Settings
      </Button2>
      </Link>

      <Button2 variant="contained" className={classes.button}>
        Modify Class
      </Button2>
      <Link to="/subjects" className="nav-link">
      <Button2 variant="contained" className={classes.button}>
        Modify Subjets
      </Button2>
      </Link>
      <Button2 variant="contained" lassName={classes.button}>
        Modify Resources
      </Button2>
      {/* <Button2 variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button2> */}
       
      </Grid>
    </Grid>
  );
}


export default withStyles(styles)(Admin)