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
 cart.push({itemName: [item], itemPrice: Math.floor(Math.random() * 100 + 1)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
    let s = 'In your cart, you have ';
    for(let i = 0; i < cart.length; ++i) {
      if (cart.length > 1 && i == cart.length - 1) {
        s += 'and ';
      }
      s += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}`;
      if (i < cart.length - 1) {
        s += ', ';
      }
    }
    s += '.';
    return s;
  }
  else {
    return 'Your shopping cart is empty.';
  }
}

function total() {
  // write your code here
  let total = 0
  for (let c of cart) {
    total += c['itemPrice']
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; ++i) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  let totalCost = total()
  cart = []
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}
