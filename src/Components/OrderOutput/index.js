import { connect } from 'react-redux';
import OrderOutput from './OrderOutput';

const mapStateToProps = (state) => {
  const { error: { hasError, errorMsg } } = state;
  return {
    hasError,
    errorMsg,
  };
}

export default connect(mapStateToProps)(OrderOutput);
