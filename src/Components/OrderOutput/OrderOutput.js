import React from 'react';
import PropTypes from 'prop-types';
import './OrderOutput.scss';

const OrderOutput = ({ hasError, orderSummary }) => (

);

OrderOutput.propTypes = {
  hasError: PropTypes.bool.isRequired,
  orderSummary: PropTypes.string,
};

OrderOutput.defaultProps = {
  orderSummary: '',
};

export default OrderOutput;
