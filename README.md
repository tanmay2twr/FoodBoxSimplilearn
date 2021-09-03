# FoodBox Website

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Routes

### 1. /Home

This Route will take you to the Home page of the application where we can see a beautifull cover page with our theme and a Footer with important public sections.

### 2. /Sign Up - Register

This Route will let a new user Register with there details including credentials and email address. Once they Register successfully they are ready for Sign In.

### 3. /Sign In

This Route will let the user sign in with their existing userID and credentials. Once they enter their credentials they will be taken to there respective dashboard on basis of if they are normal user or Administrator.

### 4. /admin/dashboard

This Route will show list of products that are already present in the dashboard. Admin dasboard has navigation bar at top of the page through which he can navgate to different routes to do a variety of services like add product, edit product, delete product, create a new cuisine, edit cuisinea and much more.

### 5. /addfooditem

This route will be accessible by admins and they can add a varierty of food items with different cuisines and categories. We can also add images and offers to the items.

### 6. /editfooditems

This route will be accessible by admins and and they can edit a particular item to maybe change its image or offer or diable the item.

### 7. /addCuisine

This route will be accessible by admins and and they can add, edit, delete a particular cuisine to maybe change its name or create a rich veriety of products.

### 8. /user/dashboard

This Route will show some images of foods available to the user at the top portion of the dashboard followed by the list of products to buy with a dropdown where they can select the quantity to add the same in cart.

### 9. /cart

This Route lets the user see his cart values and total amount for the products and user will have a payement option using which they can purchasethe cart items by paying through a credit/debit card.

### 10. /payment/success

This Route will let user expirience a smooth payment process to purchase the food items available and then see there order summary for the products purhased. This app uses Stripe payment gateway. Test credit card number- 4242 4242 4242 4242.

