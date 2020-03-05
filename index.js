var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 101);
 var newItem = {[item]: itemPrice};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}
var banana = "banaa";
var test = "test";
var more = "more";
addToCart(banana);
addToCart(test);
//addToCart(more);

function viewCart() {
  // write your code here
  var string = "In your cart, you have";
  var theCart = getCart();
  var name;
  var price;
  var punctuation;
  
  if (theCart.length < 1) {
    console.log("Your shopping cart is empty.");
    return;
  } 
  
  
    for (var i = 0; i < theCart.length; i++) {
      name = Object.keys(theCart[i]);
      price = Object.values(theCart[i]);
      
      if (theCart.length === 2) {
        punctuation = " and";
      } else {
      
      (i === theCart.length - 1) ? punctuation = ", and" : punctuation = ",";
      }
      
      if (i === 0 ) {
        string = `${string} ${name} at $${price}`;
      } if (i === 1) {
        string = `${string}${punctuation} ${name} at $${price}`;
      } if (i > 1) {
        string = `${string}${punctuation} ${name} at $${price}`;
      }
    }
   
  string = `${string}.`;
  console.log(string);
}

viewCart();

function total() {
  // write your code here
  var theCart = getCart();
  var price = 0;
  for (var i = 0; i < theCart.length; i++) {
    price += parseInt(Object.values(theCart[i]));
  }
  return price;
}


function removeFromCart(item) {
  // write your code here
  var theCart = getCart();
  for (var i = 0; i < theCart.length; i++) {
    if (cart[i].hasOwnProperty([item])) {
      theCart.splice(i, 1);
      return theCart;
    }
  }
  console.log('That item is not in your cart.');
  
}

removeFromCart(more);
console.log("End remove");

function placeOrder(cardNumber) {
  // write your code here
  var place = cardNumber;
  
  if(place === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }
  
  console.log(`Your total cost is $${total()}, which will be charged to the card ${place}.`);
  
  cart = [];
  
  console.log("place order");
}
placeOrder(123);
