// Customer order component

import React, { Component } from "react";
import {compose} from "redux";
import { connect } from "react-redux";
import { getCustomerOrders } from "../../actions/index";
import Order from './Order';
import TitleBar from "../TitleBar";
class OrderList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { params } = this.props.match
    this.props.getCustomerOrders(params.customer_id);
  }

  render() {
    return (
      <div>
       <TitleBar title="Orders" />
       <Order items={this.props.orders} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders.slice(0)
  };
}


export default connect(mapStateToProps, { getCustomerOrders })(OrderList);









