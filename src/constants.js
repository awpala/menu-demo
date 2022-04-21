const MEALS = {
  BREAKFAST: 'Breakfast',
  LUNCH: 'Lunch',
  DINNER: 'Dinner',
};

const ITEMS = {
  MAIN: 1,
  SIDE: 2,
  DRINK: 3,
  DESSERT: 4,
}

const DEFAULT_DRINK = 'Water';

const menuItems = {
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

const ERROR_PREFIX = 'Unable to process: ';

const errorMessages = {
  INVALID_ORDER: 'Invalid order input format',
  MISSING_MAIN: 'Main is missing',
  MISSING_SIDE: 'Side is missing',
  MISSING_DRINK: 'Drink is missing',
  MISSING_DESSERT: 'Dessert is missing',
};

export default {
  MEALS,
  DEFAULT_DRINK,
  menuItems,
  ERROR_PREFIX,
  errorMessages,
};
