var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: getItemPrice()})  
  return `${item} has been added to your cart.`
} 

function getItemPrice() {
  return Math.floor(Math.random()*(100) + 1);
}

function viewCart() {
  if(cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  if(cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  if(cart.length >= 3) {
    let newCart = [];
    for (let i =0; i < cart.length - 1; i++) {
      newCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have ${newCart.join(', ')}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
  
}

function total() {
  const prices = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (let i = 0; i < cart.length; i++) {
    prices.push(cart[i].itemPrice);
  }
  return prices.reduce(reducer);
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`
  }
    let message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.splice(0, cart.length);
    return message;
}
