// Redux action creators

import { 
        SHOW_CUSTOMERS, 
        SHOW_CUSTOMER_ORDERS, 
        SHOW_CUSTOMER_ORDER_PRODUCTS,
        SHOW_CUSTOMER_PRODUCTS_SUMMARY
      } from '../constants/actions';

export function getCustomers() {
  return function(dispatch) {
    return fetch("http://localhost:3001/customers")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("Result:", json);
        dispatch({ type: SHOW_CUSTOMERS, payload: json.customers });
      })
      .catch( (error)=> {
        console.log('Server Error: ', error.message);
      });
  };
}

export function getCustomerOrders(customer_id) {
  return function(dispatch) {
    return fetch(`http://localhost:3001/customers/${customer_id}/orders`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("Result:", json);
        dispatch({ type: SHOW_CUSTOMER_ORDERS, payload: json.orders });
      })
      .catch( (error)=> {
        console.log('Server Error: ', error.message);
      });
  };
}

export function getCustomerOrderProducts(customer_id, order_id) {
  return function(dispatch) {
    return fetch(`http://localhost:3001/customers/${customer_id}/orders/${order_id}/products`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("Result:", json);
        dispatch({ type: SHOW_CUSTOMER_ORDER_PRODUCTS, payload: json.products });
      })
      .catch( (error)=> {
        console.log('Server Error: ', error.message);
      });
  };
}

export function getCustomerProductsSummary(customer_id) {
  return function(dispatch) {
    return fetch(`http://localhost:3001/customers/${customer_id}/products`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("Result:", json);
        dispatch({ type: SHOW_CUSTOMER_PRODUCTS_SUMMARY, payload: json.products });
      })
      .catch( (error)=> {
        console.log('Server Error: ', error.message);
      });
  };
}

