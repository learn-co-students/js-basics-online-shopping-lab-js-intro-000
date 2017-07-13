var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  // write your code here
  var inYourCart = "In your cart, you have ";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    inYourCart += `${Object.keys(cart[0])} at \$${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
    inYourCart += `${Object.keys(cart[0])} at \$${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at \$${cart[1][Object.keys(cart[1])]}.`;
  } else {
    for (let i = 0; i < cart.length; i++) {
      inYourCart += `${Object.keys(cart[i])} at \$${cart[i][Object.keys(cart[i])]}`;
      if (i < cart.length -2) {
        inYourCart += ", "
      } else if (i === cart.length -2) {
        inYourCart += ", and "
      } else if (i === cart.length -1) {
        inYourCart += "."
      }
      }
    }
  console.log(inYourCart)
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])]
    }
    console.log("total is " + total)
    return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (`${Object.keys(cart[i])}` === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
    if (cardNumber == null) {
      console.log("Sorry, we don't have a credit card on file for you.")
    } else {
      console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    }
    cart.length = 0;
   }
