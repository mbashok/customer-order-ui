import React, { Component } from "react";
import {compose} from "redux";
import { connect } from "react-redux";
import { getCustomerProductsSummary } from "../../actions/index";
import ProductSummary from './ProductSummary';
import TitleBar from "../TitleBar";
import { Link } from 'react-router-dom'

class ProductSummaryList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { params } = this.props.match
    this.props.getCustomerProductsSummary(params.customer_id);
  }

  render() {
    const { params } = this.props.match;
    return (
      <div>
       <TitleBar title="Product Summary" params={params}/>
       <ProductSummary items={this.props.productSummary}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productSummary: state.productSummary.slice(0)
  };
}

export default connect(mapStateToProps, { getCustomerProductsSummary })(ProductSummaryList);









