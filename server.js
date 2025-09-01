/* -------------setup--------------- */
const express = require('express');
const morgan = require('morgan'); /* morgan node used */
const app = express();
app.use(morgan('dev'));
/* -------------code--------------- */

/* -------------DATA--------------- */
const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}
/* ----------------------------------- */
/*
Exercise 1: Create a homepage
- render home page (/)
- send the RESTAURANT data
- update your HTML to display the restaurant details
- Update the <title> of your home page to dynamically match the restaurant name
- Include conditional rendering to add the line “Yes we are open!” to the page if 
    the restaurant isOpen, and “Sorry, we are closed.” otherwise
*/
app.get('/', (req, res) => {
    res.render('home.ejs',{
        RESTAURANT: RESTAURANT,
  });
});

/*
Exercise 2: Create a nav bar
- create a nav.ejs file
- Add partial file to the top of the <body> in home.ejs
- Create a new route (/menu)
- Using the locals object, pass the menu array data from server.js to the menu.ejs view
- In menu.ejs, Use a forEach() loop, to render each of the menu items and their details to the page.
- Using conditionals, refactor your code to render the items based on the category of the dish
  "Mains" "Desserts" or "Sides"
*/
app.get('/menu', (req, res) => {
    res.render('menu.ejs',{
        RESTAURANT: RESTAURANT,  
  });
});

/*
Exercise 3: Create a separate page for menu categories
- Create a new /menu/:category route
- Create a category.ejs view for this new route
- Use menu.ejs as an example and add boilerplate HTML to your new view
  .pass an array of data called menuItems containing only items that match the req.params category to the
   category.ejs view.
  .Send the category name in the locals object along with the filtered menu data.
  .Once in the view, use a forEach() loop, to render each of the menu items and their details to the page.
*/
app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const menuItems = RESTAURANT.menu.filter(dish => dish.category === category);
    res.render('category.ejs',{
      RESTAURANT: RESTAURANT,
      category: category,
      menuItems: menuItems,
    });
});

/*
Exercise 4: Level Up
- Use inline conditional rendering to add a star emoji "⭐" next to the title of any menu item that has a rating of 5
*/

/* -------------TCP port--------------- */
app.listen(3000);