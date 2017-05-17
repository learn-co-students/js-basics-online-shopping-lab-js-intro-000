var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 10)) + 1;
  var pair = {[item] : price };
  cart.push(pair);
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  var response = "In your cart, you have ";
  var items = [];
  if (cart.length < 1) {
  console.log("Your shopping cart is empty.")} else {
    cart.forEach(function(item){
      for (var key in item){
        items.push(`${key} at $${item[key]}`);
      }
    });
    response += items.join(", ") + ".";
  }
  console.log(response);
}

function total() {
  var total = 0;
  cart.forEach(function(pair){
    for (var item in pair){
      total += pair[item];
    }
  });
  return total
}

function removeFromCart(item) {
  cart.forEach(function(pair, idx){
    if (pair.hasOwnProperty(item)){
      cart.splice(idx, 1);
      return cart
    }
  });
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
   var response = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  } else {
   response =  "We don't have a credit card on file for you to place your order."
  }
  cart = [];
  console.log(response);
}
