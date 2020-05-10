import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: 'darkgray',
  },
}));

export default function Product({items}) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {
        items.map((item, index) => (
          <ListItem key={item._id}>
            <ListItemAvatar>
              <Avatar>
                <FastfoodIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={item.name} 
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body1"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    SKU# — {item.product_sku}
                  </Typography>
                  <br/>
                  Qantity: — {item.quantity} <br/>
                  Order Date: — {item.orderDate} <br/>
                  Status: — {item.status} <br/>
                  
                 <Link to="/edit"> Edit </Link>
                  
                </React.Fragment>
              } 
            />
          </ListItem>
        ))
      }
    </List>
  );
}
