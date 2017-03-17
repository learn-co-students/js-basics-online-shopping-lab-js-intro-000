var cart = [];






function setCart() {
  cart = [];
  return cart;
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

function getCart() {
  return cart;
}

function addToCart(item) {
var randomPrice = Math.floor(Math.random() * 100)
var a = {[item]: randomPrice};
cart.push(a);
console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var len = cart.length;
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var myStrings = [];
    for (var i = 0; i < cart.length; i++){
        var itemName = Object.keys(cart[i])[0];
        var price = cart[i][itemName]
        myStrings.push(`${itemName} at $${price}`)
        }
    console.log("In your cart, you have " + myStrings.join(", ") + ".");
  }

}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart; // stops executing code and returns the value
    }
  } // if the cart is returned is anything ran under line 60
  console.log('That item is not in your cart.')
}

function placeOrder(number) {
  if (!number) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else if (number) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
  }
  setCart();
  return cart;
}
