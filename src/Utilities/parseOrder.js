// get constants
import {
  MEALS,
  ITEMS,
  DEFAULT_DRINK,
  menuItems,
  JOIN_ELEMENTS_TOKEN,
  ERROR_PREFIX,
  errorMessages,
} from '../constants';

const {
  BREAKFAST,
  LUNCH,
  DINNER,
} = MEALS;

const {
  MAIN,
  SIDE,
  DRINK,
  DESSERT,
} = ITEMS;

const {
  INVALID_ORDER,
  MISSING_MAIN,
  MISSING_SIDE,
  MISSING_DESSERT,
  EXCESS_ITEMS,
} = errorMessages;

// auxiliary functions
const createOrderObject = (
  orderSummary,
  hasError = false,
  errorMsg = null,
) => ({
  orderSummary,
  hasError,
  errorMsg,
});

const createOrderObjectWithError = (errorString) => {
  const errorMsg = ERROR_PREFIX + errorString;
  return createOrderObject(null, true, errorMsg);
}

// user input parsers
const parseMeal = (meal) => {
  switch (meal.toLowerCase()) {
    case (BREAKFAST.toLowerCase()): return BREAKFAST;
    case (LUNCH.toLowerCase()): return LUNCH;
    case (DINNER.toLowerCase()): return DINNER;
    default: return null;
  }
}

const parseItemsCounts = (items) => {
  let mainCount = 0;
  let sideCount = 0;
  let drinkCount = 0;
  let dessertCount = 0;

  for (const item of items) {
    switch (item) {
      case (String(MAIN)): mainCount++; break;
      case (String(SIDE)): sideCount++; break;
      case (String(DRINK)): drinkCount++; break;
      case (String(DESSERT)): dessertCount++; break;
      default: break;
    }
  }

  return {
    [MAIN]: mainCount,
    [SIDE]: sideCount,
    [DRINK]: drinkCount,
    [DESSERT]: dessertCount,
  };
}

// main parser
export const setMealAndItems = (userInput) => {
  const RAW_TOKENS_COUNT = 2;
  const [meal, items] = userInput.split(' ', RAW_TOKENS_COUNT);

  const parsedMeal = parseMeal(meal);
  if (parsedMeal === null) {
    return createOrderObjectWithError(INVALID_ORDER);
  }

  // Rule 5: Each order must contain a main and a side
  if (items === undefined) {
    const errorMsg = MISSING_MAIN + JOIN_ELEMENTS_TOKEN + MISSING_SIDE;
    return createOrderObjectWithError(errorMsg);
  }

  const parsedItemsCounts = parseItemsCounts(items);

  const  {
    [MAIN]: mainCount,
    [SIDE]: sideCount,
    [DRINK]: drinkCount,
    [DESSERT]: dessertCount,
  } = parsedItemsCounts;

  // Rule 5: Each order must contain a main and a side
  if (mainCount === 0 || sideCount === 0) {
    const errors = [];

    if (mainCount === 0) {
      errors.push(MISSING_MAIN);
    }

    if (sideCount === 0) {
      errors.push(MISSING_SIDE);
    }

    const errorMsg = errors.join(JOIN_ELEMENTS_TOKEN);
    return createOrderObjectWithError(errorMsg);
  }

  // Rule (Implicit): Only one main can be ordered
  if (mainCount > 1) {
    const errorMsg = `${menuItems[parsedMeal][MAIN]} ${EXCESS_ITEMS}`;
    return createOrderObjectWithError(errorMsg);
  }

  // Rule (Implicit): Only one drink can be ordered
  // (Corollary) Rule 7: At breakfast, multiple cups of coffee can be ordered
  if (drinkCount > 1 && parsedMeal !== BREAKFAST) {
    const errorMsg = `${menuItems[parsedMeal][DRINK]} ${EXCESS_ITEMS}`;
    return createOrderObjectWithError(errorMsg);
  }

  // Rule (Implicit): Only one side can be ordered
  // (Corollary) Rule 8: At lunch, multiple sides can be ordered
  if (sideCount > 1 && parsedMeal !== LUNCH) {
    const errorMsg = `${menuItems[parsedMeal][SIDE]} ${EXCESS_ITEMS}`;
    return createOrderObjectWithError(errorMsg);
  }

  // Rule 9: At dinner, dessert must be ordered
  if (parsedMeal === DINNER && dessertCount === 0) {
    return createOrderObjectWithError(MISSING_DESSERT);
  }

  const orderItems = [];

  const processedItems = menuItems[parsedMeal];
  for (let item in processedItems) {
    const processedItem = processedItems[item];
    const itemCount = parsedItemsCounts[item];
    const isDrinkItem = item === String(DRINK);

    let itemStr = processedItem;

    // Rule 2: The system should return the name of the items ordered
    if (itemCount > 0) {
      // Rule 4: If multiple items are ordered, the number of items should be indicated
      if (itemCount > 1) {
        itemStr += `(${itemCount})`;
      }
      orderItems.push(itemStr);
    }

    // Rule 6: If no drink is ordered, water should be returned
    if (isDrinkItem && drinkCount === 0) {
      orderItems.push(DEFAULT_DRINK);
      continue;
    }

    // Rule 10: At dinner, water is always provided
    if (parsedMeal === DINNER && isDrinkItem) {
      orderItems.push(DEFAULT_DRINK);
    }
  }

  // Rule 3: The system should always return items in the following order: meal, side, drink 
  let orderSummary = orderItems.join(JOIN_ELEMENTS_TOKEN);

  return createOrderObject(orderSummary);
}
