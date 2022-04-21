import React from 'react';
import PropTypes from 'prop-types';
import './OrderOutput.scss';

const OrderOutput = ({
  hasError,
  errorMsg,
  orderSummary,
}) => (
  <div className="order-output">
    TODO
  </div>
);

OrderOutput.propTypes = {
  hasError: PropTypes.bool.isRequired,
  errorMsg: PropTypes.bool.isRequired,
  orderSummary: PropTypes.string,
};

OrderOutput.defaultProps = {
  orderSummary: '',
};

export default OrderOutput;
