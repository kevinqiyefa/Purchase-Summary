## Instructions:

> 1. `Clone the Repo`
> 2. `npm install`
> 3. `npm start`
> 4. `npm test` to run the unit test and snapshots test

## App Structure

### Directories

The app is organized into a few main directories. Here's an explanation for each of them:

- `components` - all regular React components go in here in their own folders
- `containers` - these are Redux containers that contain **only the Redux logic**. Every container imports a React component, which it wraps around and exports with `connect`.

- `store` - anything explicitly Redux-related (aside from connected-components, aka `containers`) lives in here.

### Component Folders

One of the first things you will notice is that everything is basically in its own folder. Every component has a folder, for instance. Here's what goes into a component's folder:

- `index.js` - the main component code here
- `style.css` - CSS styles relating to the component

## App Features

- The `Pickup savings` tooltip
  - It's in OrderSummary section, and you can see all the discounts/savings and total prices
- The `See Item details` expander
  - You can see all the item details
- The `Apply Promo code` expander

  - Once you enter the correct promo code(it is `DISCOUNT`), it will dispach an action and update the reducer, then it will update the pricing summary and the item details section.

* The `UI` is responsive and works fine across different resolutions
* There are `unit tests` and `snapshot tests` for components with interactions
