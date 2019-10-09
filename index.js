var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({[itemName]: itemPrice});
  console.log(`${itemName} has been added to your cart.`);
  return cart
}

function viewCart() {
  // if there's nothing in the cart, we console.log("Your shopping cart is empty.")
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    if(cart.length === 1) {
      // Object.keys(object) which will return an array of keys
      var itemName = Object.keys(cart[0])[0] // 'pizza'
      var price = cart[0][itemName] // 24
      console.log(`In your cart, you have ${itemName} at $${price}.`)
    } else if(cart.length === 2) {
      var itemName = Object.keys(cart[0])[0] // 'pizza'
      var price = cart[0][itemName] // 24
      var itemName2 = Object.keys(cart[1])[0] // 'iPad'
      var price2 = cart[1][itemName2] // 75
      console.log(`In your cart, you have ${itemName} at $${price} and ${itemName2} at $${price2}.`)
    } else {
      var array = []
      for (var i = 0; i < cart.length; i++) {
        var itemName = Object.keys(cart[i])[0] // 'pizza'
        var price = cart[i][itemName]
        array.push(`${itemName} at $${price}`)
      }
      array[array.length - 1] = `and ${array[array.length - 1]}`
      console.log(`In your cart, you have ${array.join(', ')}.`)
    }
  }
}

function total() {
  var totalPrice = 0
  for (let i=0; i < cart.length; i++) {
    totalPrice += parseInt(Object.values(cart[i]))
  }
  return totalPrice
}

function removeFromCart(item) {
  let itemInCart = false;
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0,i).concat(cart.slice(i + 1));
      l--;
    }
  }
if (!itemInCart) {
    console.log("That item is not in your cart.")
}
return cart
}


function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
      for (let i = 0, l = cart.length; i < l; i++) {
      var price = Object.values(cart[i]);
      (console.log(`Your total cost is ${price}, which will be charged to the card ${cardNumber}`));
  } else {
  console.log("Sorry, we don't have a credit card on file for you.");
  }
} return cardNumber
}
