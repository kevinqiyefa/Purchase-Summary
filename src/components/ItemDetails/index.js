import React, { Component, Fragment } from 'react';
import './style.css';
import itemImage from '../../assets/red-chair.jpeg';

class ItemDetails extends Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    const { item_name, quantity } = this.props.itemDetails;
    const { savings, subtotal } = this.props.pricing;
    const discountedPrice = (subtotal - savings).toFixed(2);

    const item = (
      <div className="item-details">
        <div id="item-picture">
          <img src={itemImage} alt="chair" />
        </div>
        <div>
          <div id="item-name">{item_name}</div>
          <div id="item-qty">
            <div className="item-saving-prices">
              <span className="bold-text">${discountedPrice}</span>
              <span className="bold-text item-subtotal">${subtotal}</span>
            </div>
            <div>Qty: {quantity}</div>
          </div>
        </div>
      </div>
    );

    const itemDetails = this.state.isActive ? (
      <Fragment>
        <div className="Item-Details-Title" onClick={this.handleClick}>
          <h4>Hide item details </h4> <span className="minus" />
        </div>
        {item}
        <hr />
      </Fragment>
    ) : (
      <div onClick={this.handleClick} className="Item-Details-Title">
        <h4>See item details </h4> <span className="add" />
      </div>
    );
    return <div className="Item-Details-Main">{itemDetails}</div>;
  }
}

export default ItemDetails;
