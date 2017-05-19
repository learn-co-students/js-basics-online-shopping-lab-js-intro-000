var cart = []


function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 var cost = Math.floor(Math.random() * 101);
 var newItem = item
 cart.push({[newItem]: cost});
 console.log(newItem + " has been added to your cart.")
 return getCart();
}

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    console.log(`In your cart you have ${Object.keys} and ${Object.keys[i]}`)
  }
}

function total() {
  var price = 0
  cart.forEach(function(obj) {
    var itemName = Object.keys(obj)[0]
    price += obj[itemName]
    return price;
  })
  return price;
};

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
