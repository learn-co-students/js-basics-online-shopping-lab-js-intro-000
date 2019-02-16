let cart

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart = [...cart, {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1}]
  return `${item} has been added to your cart.`
}

function viewCart() {
  let baseSaying = 'In your cart, you have '
  if (!cart[0]) {
    return 'Your shopping cart is empty.'
  } else if(cart.length >= 1) {
   baseSaying += `${cart[0].itemName} at $${cart[0].itemPrice}`
  }if (cart.length >= 2) {
    let middleSaying = ''
    for (let i = 1; i<cart.length - 1; i++) {
    middleSaying += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    baseSaying += `${middleSaying}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`
  }
  return `${baseSaying}.`
}

function total() {
  let totalCart = 0
  for (let i = 0; i<cart.length; i++) {
    totalCart += cart[i].itemPrice
  }
  return totalCart
}

function removeFromCart(item) {
  let newCart

  let removeItem = cart.findIndex(cartObj => {
    return cartObj.itemName === item
  })

  if (removeItem < 0) {
    newCart = 'That item is not in your cart.'
  } else {
    console.log(cart[removeItem].itemName)
    newCart = cart.splice(removeItem, 1)
  }
  return newCart
}


function placeOrder(cardNumber) {
  let statement
  if(!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    statement =`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  cart = []
  return statement
}
