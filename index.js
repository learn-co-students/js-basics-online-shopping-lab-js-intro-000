

var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}
/*
function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  for (var price in cart) {
    console.log(`${cart[item]} has been added to your cart.`)
  }
  cart.push(item : price);
}
*/
function addToCart(item) {
   function getPrice(){
   var price = Math.floor(Math.random()* 100);
   return price;
  }
   cart.push({[item]:getPrice()});
   console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  while (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else { console.log(`In your cart
  you have ${cart[item]}` + ` and ` ${cart[price]}`.`)
  }
}

/*
Define a function `removeFromCart` which accepts one argument, the name of the
item you wish to remove. If the item isn't in the cart, the function should
print out `"That item is not in your cart."`. If the item is in your cart, it
should remove the object from the `cart` array. Then return the cart. (**HINT**:
 Check each object's key to see if it matches the parameter, then remove it if
 it matches.
*/

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
