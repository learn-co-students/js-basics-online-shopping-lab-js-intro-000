var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName:item, itemPrice: Math.floor(Math.random()*100)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length==0) {
    return "Your shopping cart is empty."
  } else {
  var text1="In your cart, you have "
  for (let i=0; i<cart.length; i++) {
    text1=text1 + cart[i].itemName + " at $" + cart[i].itemPrice
    if (i==cart.length-1) {
      text1=text1 + "."
    }
    if (i==cart.length-2) {
      text1=text1 + ", and "
    }
    if (i<cart.length-2) {
      text1=text1 + ", "
    }
    }
    return text1
}
}

function total() {
  var total = 0
  for (let n=0; n<cart.length; n++) {
    total += cart[n].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (let v=0; v<cart.length; v++) {
    if (item==cart[v].itemName) {
      cart.splice(v,1)
      return cart
    }
  }
      return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
    var newTotal = total()
    cart.length=0
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
}
