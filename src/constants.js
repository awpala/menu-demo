// menu selection

export const MEALS = {
  BREAKFAST: 'Breakfast',
  LUNCH: 'Lunch',
  DINNER: 'Dinner',
};

export const ITEMS = {
  MAIN: 1,
  SIDE: 2,
  DRINK: 3,
  DESSERT: 4,
};

export const DEFAULT_DRINK = 'Water';

export const menuItems = {
  [MEALS.BREAKFAST]: {
    [ITEMS.MAIN]: 'Eggs',
    [ITEMS.SIDE]: 'Toast',
    [ITEMS.DRINK]: 'Coffee',
  },
  [MEALS.LUNCH]: {
    [ITEMS.MAIN]: 'Sandwich',
    [ITEMS.SIDE]: 'Chips',
    [ITEMS.DRINK]: 'Soda',
  },
  [MEALS.DINNER]: {
    [ITEMS.MAIN]: 'Steak',
    [ITEMS.SIDE]: 'Potatoes',
    [ITEMS.DRINK]: 'Wine',
    [ITEMS.DESSERT]: 'Cake',
  },
};

export const JOIN_ELEMENTS_TOKEN = ', ';


// errors

export const ERROR_PREFIX = 'Unable to process: ';

export const errorMessages = {
  INVALID_ORDER: 'Invalid order input format',
  MISSING_MAIN: 'Main is missing',
  MISSING_SIDE: 'Side is missing',
  MISSING_DESSERT: 'Dessert is missing',
  EXCESS_ITEMS: 'cannot be ordered more than once',
};
