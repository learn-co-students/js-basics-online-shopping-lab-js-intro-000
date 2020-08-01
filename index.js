var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var len = cart.length;
  var active_cart = "In your cart, you have ";
  if(len === 0) {return "Your shopping cart is empty.";}
  for(let i = 0; i < len; i++) {
    if(len === 1) {return `In your cart, you have ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`}
    else if(i === len - 1) {active_cart += `and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`;}
    else {active_cart += `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `;}
  }
  return active_cart;
}

function total() {
  var active_total = 0;
  var len = cart.length;
  for(let i = 0; i < len; i++) {
    active_total += cart[i]["itemPrice"];
  }
  return active_total;
}

function removeFromCart(item) {
  var len = cart.length;
  for(let i = 0; i < len; i++) {
    if(item === cart[i]["itemName"]) {
      cart.splice(i,1);
      break;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber = 0) {
  var order_total = "";
  var len = cart.length;
  if(cardNumber === 0) {return "Sorry, we don't have a credit card on file for you.";}
  else {
    order_total = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    for(let i = 0; i < len; i++) {
      cart.pop();
    }
    return order_total;
  }
}
