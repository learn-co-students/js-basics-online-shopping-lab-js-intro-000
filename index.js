var cart = [];

function getCart(name) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random() * 100) + 1);
 cart.push({[item]:price})
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {

  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var itemsAndPrices = []

    for (var i = 0; i < cart.length; i++) {
      var itemAndPrice = cart[i]
      var item = Object.keys(itemAndPrice)[0]
      var price = itemAndPrice[item]
      itemsAndPrices.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
