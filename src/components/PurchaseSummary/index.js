import React, { Component } from 'react';

import PriceSummary from '../PriceSummary';
import Promotion from '../Promotion';
import ItemDetails from '../ItemDetails';
import './style.css';

class PurchaseSummary extends Component {
  applyPromoCode = () => {
    const { subtotal, savings, tax } = this.props.pricingData.pricing;
    this.props.applyDiscount(subtotal, savings, tax);
  };

  render() {
    const {
      pricing,
      itemDetails,
      promo_code,
      discount_applied
    } = this.props.pricingData;

    return pricing ? (
      <div className="Purchase-Summary-Main">
        <PriceSummary pricing={pricing} />
        <ItemDetails itemDetails={itemDetails} pricing={pricing} />
        <Promotion
          promoCode={promo_code}
          discountApplied={discount_applied}
          applyPromoCode={this.applyPromoCode}
        />
      </div>
    ) : (
      <div className="Purchase-Summary-Loader" />
    );
  }
}

export default PurchaseSummary;
