import React, { Component } from 'react';
import './style.css';

class Promotion extends Component {
  state = {
    showForm: false,
    promoCode: ''
  };

  handleClick = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handlePromoCodeChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleApplyPromoCode = () => {
    //you can only apply the promo code once
    //should add a temp state to check when should display error messages
    if (
      this.state.promoCode === this.props.promoCode &&
      !this.props.discountApplied
    ) {
      this.setState({ promoCode: '', showForm: false });

      this.props.applyPromoCode();
    } else {
      this.setState({ promoCode: '' });
    }
  };

  render() {
    const errorMessage = this.props.discountApplied ? (
      <span>You can only apply once</span>
    ) : null;

    const promotionForm = (
      <form className="promotion-form">
        <label htmlFor="input-promo-code" id="promotion-form-input-label">
          Promo code
        </label>
        <div>
          <input
            type="text"
            name="promoCode"
            id="promotion-form-input-field"
            onChange={this.handlePromoCodeChange}
            value={this.state.promoCode}
          />
          <input
            type="button"
            value="Apply"
            id="promotion-form-button"
            onClick={this.handleApplyPromoCode}
          />
        </div>
        {errorMessage}
      </form>
    );

    let promoSection = this.state.showForm ? (
      <div>
        <div onClick={this.handleClick} className="Promotion-Section-Title">
          <h4>Hide promo code </h4> <span className="minus" />
        </div>

        {promotionForm}
      </div>
    ) : (
      <div onClick={this.handleClick} className="Promotion-Section-Title">
        <h4>Apply promo code </h4> <span className="add" />
      </div>
    );
    return <div className="Promotion-Main">{promoSection}</div>;
  }
}

export default Promotion;
