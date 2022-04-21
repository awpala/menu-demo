// constants
export const SET_ERROR_STATE = 'SET_ERROR_STATE';
export const SET_ERROR_MSG = 'SET_ERROR_MSG';

// actions
export const setErrorState = (hasError) => ({
  type: SET_ERROR_STATE,
  hasError,
});

export const setErrorMsg = (errorMsg) => ({
  type: SET_ERROR_MSG,
  errorMsg,
});

// action handlers
const ACTION_HANDLERS = {
  [SET_ERROR_STATE]: (state, action) => ({
    ...state,
    hasError: action.hasError,
  }),
  [SET_ERROR_MSG]: (state, action) => ({
    ...state,
    errorMsg: action.errorMsg,
  }),
};

const initialState = {
  hasError: null,
  errorMsg: null,
};

const errorReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default errorReducer;
