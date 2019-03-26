import React from 'react';
import './style.css';

const PriceSummary = ({ pricing }) => {
  // console.log(pricing.subtotal, 'ss');
  return (
    <div className="Price-Summary-Main">
      <div>
        <span>Subtotal</span>
        <span className="bold-text">${pricing.subtotal}</span>
      </div>

      <div>
        <div className="Price-Summary-Savings">
          Pickup savings
          <span className="tooltiptext">
            Pickup your order in the store helps cut cost, and we pass the
            savings on to you.
          </span>
        </div>
        <span className="red-text bold-text">-${pricing.savings}</span>
      </div>

      <div>
        <div className="Price-Summary-Tax-Zip">
          <span>Est. taxes & fees</span>
          <span>(Based on {pricing.zip})</span>
        </div>
        <span className="bold-text">${pricing.tax}</span>
      </div>

      <hr />

      <div className="big-text">
        <span className="bold-text">Est. total</span>
        <span className="bold-text">${pricing.total}</span>
      </div>
    </div>
  );
};

export default PriceSummary;
