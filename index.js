var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({"itemName": item, "itemPrice": Math.floor((Math.random() * 100) + 1)});
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  const temp = [];
  if (!cart.length) {
    return 'Your shopping cart is empty.'
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
  }
  else {
    for (let i = 0; i < cart.length - 1; i++) {
      temp.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
    }
  }
  return `In your cart, you have ${temp.join(', ')}` + `, and ${cart[cart.length-1]["itemName"]} at $${cart[cart.length-1]["itemPrice"]}.`
}

function total() {
  var t = 0;
  for (let i = 0; i < cart.length; i++) {
    t += cart[i]["itemPrice"];
  }
  return t
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart
    }
  }
//Find out why this works?????? Why is this outside the for loop?
//probs because if the item has no match in cart array within 1 complete loop, there's no need to iterate through
return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var t = total()
    cart = [];
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  }
}
