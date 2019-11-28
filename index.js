var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = new Object();
 newItem["itemName"] = item;
 newItem["itemPrice"] = Math.floor((Math.random()*100));
 cart.push(newItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  var output = "In your cart, you have";
  for (let item of cart){
    if (item !== cart[cart.length-1]){
      output += ` ${item.itemName} at $${item.itemPrice},`;
    }
    else {
      output += ` and ${item.itemName} at $${item.itemPrice}.`;
    }
  }
  return output;
}

function total() {
  var total = 0;
  for (let item of cart){
    total += item.itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (let ele of cart){
    if (ele.itemName === item){
      let i = cart.indexOf(ele);
      cart = [...cart.slice(0,i),...cart.slice(i+1)]
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber){
    var sum = total(cart);
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
