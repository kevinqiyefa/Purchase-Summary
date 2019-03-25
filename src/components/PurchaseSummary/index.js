import React, { Component } from 'react';

import PriceSummary from '../PriceSummary';
import Promotion from '../Promotion';
import ItemDetails from '../ItemDetails';
import './style.css';

class PurchaseSummary extends Component {
  render() {
    const { pricing, itemDetails } = this.props.pricingData;

    return (
      <div className="Summary-Container-Main">
        <PriceSummary pricing={pricing} />
        <ItemDetails itemDetails={itemDetails} />
        <Promotion />
      </div>
    );
  }
}

export default PurchaseSummary;
