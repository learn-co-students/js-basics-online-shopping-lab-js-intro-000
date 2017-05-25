
var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

// This function should automatically set a price for
//  this item by generating a random number between 0 and 100.
//   (Hint: Math.random() generates a random number in 0, 1;
//   Math.floor() rounds a number down to the nearest integer.)
// This function should add the item and the price as an object
// ({item: price}) to the cart array. This function should print
//  out to the console <item> has been added to your cart. and return the cart.
function addToCart(item) {
    var price = Math.floor(Math.random() * 100)
    cart.push({
        [item]: price
    })
    console.log(`${item} has been added to your cart.`);
    return cart;
};

// Define a function viewCart which does not accept any arguments.
//  This function should loop over every item in cart to print out
//  "In your cart you have [item and price pairs].". If there isn't
//  anything in your cart, the function should print out
//  "Your shopping cart is empty.".

function viewCart() {


   if (cart.length === 0) {
     return console.log("Your shopping cart is empty.")
   }

   const itemsAndPrices = []

   for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
     var price = cart[i][item];

     itemsAndPrices.push(`${item} at \$${price}`)
   }

   console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
 }


function total() {
  var total = 0 ;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      total += cart[i][item];
}
}
return total
}

function removeFromCart(item) {
   let itemInCart = false

   for (let i = 0, l = cart.length; i < l; i++) {
     if (cart[i].hasOwnProperty(item)) {
       itemInCart = true
       cart = cart.slice(0, i).concat(cart.slice(i + 1))
     }
   }

   if (!itemInCart) {
     console.log("That item is not in your cart.")
   }

   return cart;
 }



// Define a function placeOrder which accepts one argument,
// a credit card number. If no argument is received, then the
// function should print out "We don't have a credit card on file
// for you to place your order.". If there is a credit card on file,
// the function should print out "Your total cost is $${total()}, which
// will be charged to the card ${cardNumber}.". The function should empty
//  the cart array.
function placeOrder(cardNumber) {
     if (!cardNumber){
       return console.log(`We don\'t have a credit card on file for you to place your order.`)
     }
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
       cart = []
   }
