// declare and Initialize an array: Cart
var cart = new Array();
// get Cart array
function getCart() {
  return cart;
}
// Adding an item with a price  to the cart
function addToCart(item) {
  // assign an item (key) to object cart with a random price
  cart.push({item: Math.floor(Math.random() * 100)});
  // print out information for the user
  console.log(`${item} has been added to your cart.`);
  // return cart
  return cart;
}
// View the cart
function viewCart() {
    // Check cart is not empty
    if (cart.length > 0) {
    // If cart is not empty loop throught the items in cart array.
      for (var i = 0; i < cart.length; i++) {
        console.log(`In your cart, you have ` + Object.keys(cart[i]) + " at " + cart[i][Object.keys(cart[i])] +",");
      }
    } // If cart is empty display a warning message to user.
    else { console.log("Your shopping cart is empty."); }
}
function removeFromCart(item) {
  cart.hasOwnProperty('item') ? delete cart['item'] : console.log("That item is not in your cart.");
  return cart;
}
function placeHolder(cardNumber) {
  var creditCardEmpty = cardNumber;
  typeof creditCardEmpty !== 'undefined' ? console.log("We don't have a credit card on file for you to place your order.") :
  console.log(`"Your total cost is $${total()}, which will be charged to the card ${cardNumber}."`);
}
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
