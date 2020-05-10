import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
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

export default function Order({items}) {
  const classes = useStyles();
  return (
    <div>
    {items.length===0 && <span>No orders found for this customer.</span>}
    <List className={classes.root}>
      {
        items.map((item, index) => (
          <ListItem key={item._id}>
            <ListItemAvatar>
              <Avatar>
                <AddShoppingCartIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={item.description} 
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body1"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {item.status}
                  </Typography>
                  <br/>
                  Order ID: — {item._id} <br/>
                  Order Date: — {item.orderDate} <br/>
                  
                 <Link to={`/customers/${item.customer_id}/orders/${item._id}/products`}> Show Products </Link>
                  
                </React.Fragment>
              } 
            />
          </ListItem>
        ))
      }
    </List>
    </div>
  );
}
