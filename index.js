var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100) + 1;
 cart.push({"itemName": item, itemPrice: price});
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  } else {
      let front = 'In your cart, you have'
      let mid = []
      let end = `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
        for (let i = 0; i < cart.length-1; i++) {
            mid.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return front + mid + end;
  }
}

function total() {
  // write your code here
  let sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum = sum + getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart
    }}
    return 'That item is not in your cart.'}

function placeOrder(cardNumber) {
  if (cardNumber) {
    let endTotal = total()
    cart.splice(0, cart.length);
    return `Your total cost is $${endTotal}, which will be charged to the card ${cardNumber}.`;
} else {
    return `Sorry, we don't have a credit card on file for you.`
}}
