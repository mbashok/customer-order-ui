import React, { Component } from "react";
import {compose} from "redux";
import { connect } from "react-redux";
import { getCustomerOrderProducts } from "../../actions/index";
import Product from './Product';
import TitleBar from "../TitleBar";
import { Link } from 'react-router-dom'

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { params } = this.props.match
    this.props.getCustomerOrderProducts(params.customer_id, params.order_id);
  }

  render() {
    const { params } = this.props.match;
    return (
      <div>
       <TitleBar title="Products" params={params}/>
       <Product items={this.props.products}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.slice(0)
  };
}

export default connect(mapStateToProps, { getCustomerOrderProducts })(ProductList);









