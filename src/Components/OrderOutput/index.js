import { connect } from 'react-redux';
import OrderOutput from './OrderOutput';

const mapStateToProps = (state) => {
  const {
    error: { hasError, errorMsg },
    menuSelection: { orderSummary },
  } = state;
  return {
    hasError,
    errorMsg,
    orderSummary,
  };
}

export default connect(mapStateToProps)(OrderOutput);
