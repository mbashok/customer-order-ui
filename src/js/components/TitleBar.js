// AppBar component
// It is a custom component for showing the title bar

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#343434',
    width: '100%',
    minWidth: 600,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color:{ 
    backgroundColor: '#C00F00'
  },
  link:{
    padding: 4
  }

}));

export default function TitleBar({title, params={}}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography> 
          { title==='Products' && <Link className={classes.link} to={`/customers/${params.customer_id}/orders`}> Back To Orders </Link>}
          <Link className={classes.link} to="/">Home</Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}