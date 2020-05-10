import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: 'darkgray',
  },
  link:{
    padding: 4
  }
}));

export default function Customer({items}) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {
        items.map((item, index) => (
          <ListItem key={item._id}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={item.firstName + ' ' + item.lastName} 
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body1"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {item.gender}
                  </Typography>
                  <br/>
                  Address — {item.address.address1} {item.address.address2} <br/>
                  {item.address.city}, {item.address.state}, {item.address.country}.
                   <br/>
                  <Link className={classes.link} to={`/customers/${item._id}/orders`}>Show Orders</Link>
                  <Link className={classes.link} to={`/customers/${item._id}/products`}>Show Product Summary</Link>
                </React.Fragment>
              } 
            />
          </ListItem>
        ))
      }
    </List>
  );
}
