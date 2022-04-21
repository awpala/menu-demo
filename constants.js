const menuOptions = {
  breakfast: {
    1: 'Eggs',
    2: 'Toast',
    3: 'Coffee',
  },
  lunch: {
    1: 'Sandwich',
    2: 'Chips',
    3: 'Soda',
  },
  dinner: {
    1: 'Steak',
    2: 'Potatoes',
    3: 'Wine',
    4: 'Cake',
  },
};

const ERROR_PREFIX = 'Unable to process';

const errorMessages = {
  breakfast: {
    MISSING_SIDE: `${ERROR_PREFIX}: Side is missing`,
  },
  lunch: {
    MULTIPLE_MAIN: `${ERROR_PREFIX}: ${menuOptions[lunch][1]} cannot be ordered more than once`,
    MISSING_IDS: `${ERROR_PREFIX}: Main is missing, side is missing`,
  },
  dinner: {
    MISSING_DESSERT: `${ERROR_PREFIX}: Dessert is missing`,
  },
};

export default {
  menuOptions,
  errorMessages,
};
