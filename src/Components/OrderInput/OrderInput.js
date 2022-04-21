import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setMealAndItems } from '../../Utilities/parseOrder';
import './OrderInput.scss';

const OrderInput = ({
  setErrorState,
  setErrorMsg,
  setOrderSummary,
}) => {
  // Rule 1: An order consists of a meal and a collection of comma-separated item IDs
  const [userInput, setUserInput] = useState('');

  const onClear = () => {
    setUserInput('');
    setErrorState(null);
    setErrorMsg(null);
    setOrderSummary(null);
  }

  const onSubmit = () => {
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
          value={userInput}
          onChange={(({ target: { value }}) => setUserInput(value))}
        />
        <button
          className="user-button"
          onClick={onClear}
        >
          Clear
        </button>
        <button
          className="user-button"
          onClick={onSubmit}
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
