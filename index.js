var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1
  cart.push( { itemName: item, itemPrice: price })
  return  `${item} has been added to your cart.`
}


function viewCart() {
  function buildStatement(prefix, idx) {
    return `${prefix}${cart[idx].itemName} at $${cart[idx].itemPrice}`
  }

  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }

  let statement = 'In your cart, you have '
  for (let x = 0; x < cart.length; x++) {

    let prefix = ''
    if (cart.length > 1) {
       if (x + 1 === cart.length) // last one and two or more
          prefix = ', and '
       else {
          prefix = (x == 0) ? '' : ', '
       }
    }
    statement += buildStatement(prefix, x)
  }

  statement += '.'
  return statement
}


function total() {
  let total = 0
  for (let x = 0; x < cart.length; x++) {
    total += cart[x].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (let x = 0; x < cart.length; x++) {
    if (cart[x].itemName === item) {
      cart.splice(x,1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
     return "Sorry, we don't have a credit card on file for you."
  } else {
     let tot = total()
     cart.length = 0
     return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
  }
}
