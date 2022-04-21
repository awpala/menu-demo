// constants
export const SET_ORDER_SUMMARY = 'SET_ORDER_SUMMARY';

// actions
export const setOrderSummary = (orderSummary) => ({
  type: SET_ORDER_SUMMARY,
  orderSummary,
});

// action handlers
const ACTION_HANDLERS = {
  [SET_ORDER_SUMMARY]: (state, action) => ({
    ...state,
    orderSummary: action.orderSummary,
  }),
};

const initialState = {
  orderSummary: null,
};

const menuReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default menuReducer;
