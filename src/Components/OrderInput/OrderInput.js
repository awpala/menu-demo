import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setMealAndItems } from '../../Utilities/parseOrder';
import './OrderInput.scss';

const OrderInput = ({
  setErrorState,
  setErrorMsg,
  setOrderSummary,
}) => {
  const [userInput, setUserInput] = useState('');

  const onClick = () => {
    const {
      hasError,
      errorMsg,
      orderSummary,
    } = setMealAndItems(userInput);
    setErrorState(hasError);
    setErrorMsg(errorMsg);
    setOrderSummary(orderSummary);
  }

  return (
    <div className="order-input">
      <p>Please enter your order:</p>
      <div className="user-actions">
        <input
          id="user-input"
          type="text"
          onChange={(({ target: { value }}) => setUserInput(value))}
        />
        <button
          id="user-button"
          tabIndex={0}
          onClick={onClick}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
}

OrderInput.propTypes = {
  setErrorState: PropTypes.func.isRequired,
  setErrorMsg: PropTypes.func.isRequired,
  setOrderSummary: PropTypes.func.isRequired,
};

export default OrderInput;
