import { connect } from 'react-redux';
import OrderInput from './OrderInput';
import { setErrorState, setErrorMsg } from '../../Reducers/error';
import { setOrderSummary } from '../../Reducers/menuSelection';

const mapDispatchToProps = (dispatch) => ({
  setErrorState: (hasError) => dispatch(setErrorState(hasError)),
  setErrorMsg: (errorMsg) => dispatch(setErrorMsg(errorMsg)),
  setOrderSummary: (orderSummary) => dispatch(setOrderSummary(orderSummary)),
});

export default connect(null, mapDispatchToProps)(OrderInput);
