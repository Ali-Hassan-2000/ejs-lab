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



/* -------------TCP port--------------- */
app.listen(3000);