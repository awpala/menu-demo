# Menu Demo Application

## Description

**Overview**: Aptitude assessment for Evive Engineering team candidacy.

**Primary Technologies Used**: JavaScript, React, Redux

Live version of the application is hosted [here](https://flourishing-sunflower-1e0124.netlify.app/).

## Dependencies

This application requires the following dependencies:
* Node.js (v. 16 or higher)
* npm (v. 6 or higher)

See `package.json` for full dependencies list.

## Local Development and Testing

For development and testing, git clone this repository. All subsequent commands are assumed to be issued from the top-level directory (i.e., `.../menu-demo`).

To develop locally, issue the following terminal command:
```
npm start
```

To run the unit tests suite locally (cf. `/src/Tests/parseOrder.test.js`), issue the following terminal command:
```
npm test
```

## Other Notes

The application is organized into the view `Menu`, which is compose of components `OrderInput` and `OrderOutput`. A redux store is used to manage global state across the application.

`/src/constants.js` contains global constants which provide templated information for menu selections/items and error messaging across the application.

The principal business logic can be found in `/src/Utilities/parseOrder.js`, particularly in the function `setMealAndItems()`.
