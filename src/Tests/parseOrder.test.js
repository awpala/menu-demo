import { setMealAndItems } from "../Utilities/parseOrder";

const getActualOutput = (userInput) => setMealAndItems(userInput);

const makeAssertion = (actualOutput, expectedOutput) => {
  expect(actualOutput).toStrictEqual(expectedOutput);
}

describe('Menu tests', () => {
  describe('General rules tests', () => {
    it('Rule 1: An order consists of a meal and collection of comma-separated item IDs', () => {
      makeAssertion(
        getActualOutput('non-existent meal'),
        {
          orderSummary: null,
          hasError: true,
          errorMsg: 'Unable to process: Invalid order input format',
        },
      );
    });

    it('Rule 2: The system should return the name of the items ordered', () => {
      makeAssertion(
        getActualOutput('Breakfast 1,2,3'),
        {
          orderSummary: 'Eggs, Toast, Coffee',
          hasError: false,
          errorMsg: null,
        },
      );
    });

    it('Rule 3: The system should always return items in the following order: meal, side, drink', () => {
      makeAssertion(
        getActualOutput('Breakfast 2,3,1'),
        {
          orderSummary: 'Eggs, Toast, Coffee',
          hasError: false,
          errorMsg: null,
        },
      );
    });

    it('Corollaries 4 & 8: The system should output an error if inappropriate multiple items are indicated', () => {
      makeAssertion(
        getActualOutput('Breakfast 1,2,2'),
        {
          orderSummary: null,
          hasError: true,
          errorMsg: 'Unable to process: Toast cannot be ordered more than once',
        },
      );

      makeAssertion(
        getActualOutput('Lunch 1,1,2,3'),
        {
          orderSummary: null,
          hasError: true,
          errorMsg: 'Unable to process: Sandwich cannot be ordered more than once',
        },
      );

      makeAssertion(
        getActualOutput('Dinner 1,2,3,3'),
        {
          orderSummary: null,
          hasError: true,
          errorMsg: 'Unable to process: Wine cannot be ordered more than once',
        },
      );
    });

    it('Rule 5: Each order must contain a main and a side', () => {
      makeAssertion(
        getActualOutput('Breakfast 1'),
        {
          orderSummary: null,
          hasError: true,
          errorMsg: 'Unable to process: Side is missing',
        },
      );

      makeAssertion(
        getActualOutput('Breakfast 2'),
        {
          orderSummary: null,
          hasError: true,
          errorMsg: 'Unable to process: Main is missing',
        },
      );

      makeAssertion(
        getActualOutput('Lunch'),
        {
          orderSummary: null,
          hasError: true,
          errorMsg: 'Unable to process: Main is missing, Side is missing',
        },
      );
    });

    it('Rule 6: If no drink is ordered, water should be returned', () => {
      makeAssertion(
        getActualOutput('Lunch 1,2'),
        {
          orderSummary: 'Sandwich, Chips, Water',
          hasError: false,
          errorMsg: null,
        },
      );
    });
  });

  describe('Breakfast rules tests', () => {
    it(
      'Rule 4: If multiple items are ordered, the number of items should be indicated / ' +
      'Rule 7: At breakfast, multiple cups of coffee can be ordered',
      () => {
        makeAssertion(
          getActualOutput('Breakfast 1,2,3,3,3'),
          {
            orderSummary: 'Eggs, Toast, Coffee(3)',
            hasError: false,
            errorMsg: null,
          },
        );
      },
    );
  });

  describe('Lunch rules tests', () => {
    it('Rule 8: At lunch, multiple sides can be ordered', () => {
      makeAssertion(
        getActualOutput('Lunch 1,2,2'),
        {
          orderSummary: 'Sandwich, Chips(2), Water',
          hasError: false,
          errorMsg: null,
        },
      );
    });
  });

  describe('Dinner rules tests', () => {
    it('Rule 9: At dinner, dessert must be ordered', () => {
      makeAssertion(
        getActualOutput('Dinner 1,2,3'),
        {
          orderSummary: null,
          hasError: true,
          errorMsg: 'Unable to process: Dessert is missing',
        },
      );
    });

    it('Rule 10: At dinner, water is always provided', () => {
      makeAssertion(
        getActualOutput('Dinner 1,2,3,4'),
        {
          orderSummary: 'Steak, Potatoes, Wine, Water, Cake',
          hasError: false,
          errorMsg: null,
        },
      );
    });
  });
});
