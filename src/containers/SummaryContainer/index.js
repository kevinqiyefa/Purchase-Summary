import { connect } from 'react-redux';
import PurchaseSummary from '../../components/PurchaseSummary';
import { applyDiscount } from '../../store/actions/promo';

function mapStateToProps(state) {
  return { pricingData: state };
}

export default connect(
  mapStateToProps,
  { applyDiscount }
)(PurchaseSummary);
