var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let newItem = Object.assign({}, {itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 cart.push(newItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length != 0) {
  let cartStuff = []
  for (let i = 0; i < cart.length; i++) {
    cartStuff.push(cart[i].itemName + ' at $' + cart[i].itemPrice)
  }
  if (cart.length === 1 ) {
  return `In your cart, you have ${cartStuff}.`
  }
  else {
    let lastItem = cartStuff.pop();
    return `In your cart, you have ${cartStuff.join(', ')}, and ${lastItem}.`
  }
  }
  else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i <cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
    let finalCost = total();
    cart = [];
    return `Your total cost is \$${finalCost}, which will be charged to the card ${cardNumber}.`
  }
}
