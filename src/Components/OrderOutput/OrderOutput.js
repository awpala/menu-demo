import React from 'react';
import PropTypes from 'prop-types';
import './OrderOutput.scss';

const OrderOutput = ({
  hasError,
  errorMsg,
  orderSummary,
}) => {
  let content = null;

  if (hasError) {
    content = <p className="error-msg">{errorMsg}</p>;
  }

  if (hasError === false) {
    content = <p className="order-summary">{orderSummary}</p>;
  }

  return (
    <div className="order-output">
      <p className="order-status">Order Summary:</p>
      {content}
    </div>
  );
}

OrderOutput.propTypes = {
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  orderSummary: PropTypes.string,
};

OrderOutput.defaultProps = {
  hasError: null,
  errorMsg: null,
  orderSummary: null,
};

export default OrderOutput;
