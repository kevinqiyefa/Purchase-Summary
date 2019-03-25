import React from 'react';
import './style.css';

const PriceSummary = ({ pricing }) => {
  // console.log(pricing.subtotal, 'ss');
  return (
    <div className="Price-Summary-Main">
      <div>{pricing.subtotal}</div>
    </div>
  );
};

export default PriceSummary;
