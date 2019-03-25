import { connect } from 'react-redux';
import PurchaseSummary from '../../components/PurchaseSummary';

function mapStateToProps(state) {
  return { pricingData: state };
}

export default connect(
  mapStateToProps,
  {}
)(PurchaseSummary);
