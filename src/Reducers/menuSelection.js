// constants
export const SET_MEAL = 'SET_MEAL';
export const SET_MENU_ITEMS = 'SET_MENU_ITEMS';

// actions
export const setMeal = (meal) => ({
  type: SET_MEAL,
  meal,
});

export const setMenuItems = (menuItems) => ({
  type: SET_MENU_ITEMS,
  menuItems,
});

// action handlers
const ACTION_HANDLERS = {
  [SET_MEAL]: (state, action) => ({
    ...state,
    meal: action.meal,
  }),
  [SET_MENU_ITEMS]: (state, action) => ({
    ...state,
    menuItems: action.menuItems,
  }),
};

const initialState = {
  meal: null,
  menuItems: null,
};

const menuReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default menuReducer;
