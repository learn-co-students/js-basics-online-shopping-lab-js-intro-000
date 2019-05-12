var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100) + 1});
  return `${item} has been added to your cart.`
}

function viewCart() {
  let message = "Your shopping cart is empty.";
  let list = "In your cart, you have";
  for(let i=0; i<cart.length; i++) {
    let conjunction = " ";
    if(i>cart.length-2) {conjunction = " and "};
    if(i===0) {conjunction = " "};
    list = list + `${conjunction}${cart[i].itemName} at $${cart[i].itemPrice}${i<cart.length-1 ? "," : "."}`;
    message = list;
  }
  return message;
}

function total() {
  let sum = 0;
  for(let i=0; i<cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  let removed = false;
  for(let i=0;  i<cart.length; i++) {
    if(item===cart[i].itemName) {
      cart.splice(i,1);
      removed = true;
    }
  }
  if(removed===true) {
    return cart;
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  let totalCost = total();
  if(typeof cardNumber === "undefined") {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
  }
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
}
