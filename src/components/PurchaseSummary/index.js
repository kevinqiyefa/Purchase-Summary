import React, { Component } from 'react';

import PriceSummary from '../PriceSummary';
import Promotion from '../Promotion';
import ItemDetails from '../ItemDetails';
import './style.css';

class PurchaseSummary extends Component {
  render() {
    const { pricing, itemDetails } = this.props.pricingData;

    return pricing ? (
      <div className="Purchase-Summary-Main">
        <PriceSummary pricing={pricing} />
        <ItemDetails itemDetails={itemDetails} />
        <Promotion />
      </div>
    ) : (
      <div className="Purchase-Summary-Loader" />
    );
  }
}

export default PurchaseSummary;
