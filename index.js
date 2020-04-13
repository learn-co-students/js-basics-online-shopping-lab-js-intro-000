var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item = { itemName: item, itemPrice: Math.floor(Math.random() * 100) };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  var numberItems = cart.length
  var cartList = []
  if(numberItems === 0) {
    return "Your shopping cart is empty."
  }
  else if(numberItems === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
    for(let i = 0; i < cart.length; i += 1) {
      if(i < (cart.length - 1)) {
        cartList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      else {
        cartList.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
  }
  return `In your cart, you have${cartList}.`
}

function total() {
  var sum = 0
  for(let i = 0; i < cart.length; i += 1) {
    sum = sum + cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i += 1) {
    if(item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var sum  = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
