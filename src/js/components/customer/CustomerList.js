// Customer component.
// To show the list of customers

import React, { Component } from "react";
import {compose} from "redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getCustomers} from "../../actions/index";
import TitleBar from "../TitleBar";
import Customer from './Customer';

class CustomerList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCustomers();
  }

  render() {
    return (
      <div>
       <TitleBar title="Customers" />
       <Customer items={this.props.customers} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.slice(0)
  };
}


export default connect(mapStateToProps, { getCustomers })(CustomerList);




