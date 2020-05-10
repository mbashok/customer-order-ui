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

export default function ProductSummary({items}) {
  const classes = useStyles();
  return (
    <div>
    {items.length===0 && <span>No product summary found for this customer.</span>}
    <List className={classes.root}>
      {
        items.map((item, index) => (
          <ListItem key={item._id.product_sku}>
            <ListItemAvatar>
              <Avatar>
                <FastfoodIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={item._id.name} 
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body1"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    SKU# — {item._id.product_sku}
                  </Typography>
                  <br/>
                  Total Qantity: — {item.totalQuantity} <br/>
                 <Link to="/edit"> Edit </Link>
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
