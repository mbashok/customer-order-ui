// index.js
// App init file

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import OrderList from "./js/components/order/OrderList";
import ProductList from "./js/components/product/ProductList";
import ProductSummaryList from "./js/components/product/ProductSummaryList";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import './index.css';

render(
	<Provider store={store}>
    	<Router>
		    <div className="App-header">
		      <Route exact path="/" component={App} />
		      <Route exact path="/customers/:customer_id/orders" component={OrderList} />
		      <Route exact path="/customers/:customer_id/orders/:order_id/products" component={ProductList} />
		      <Route exact path="/customers/:customer_id/products" component={ProductSummaryList} />
		    </div>
	  	</Router>
	</Provider>,
  	document.getElementById("root")
);
