var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  var newAddition = {itemName: item, itemPrice: getRandomInt(1,100)};
  cart.push(newAddition)
  console.log(cart)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
} else if (cart.length == 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
} else if (cart.length > 2) {
  var midsentence = ``
    for (let i = 0; i < getCart().length-1; i++) {
       midsentence += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
//    return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`
    }
    return `In your cart, you have ${midsentence}and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}.`

} else {
  return "Your shopping cart is empty."
}
}

function total() {
  var sum = 0;
  for (let i = 0; i < getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
//  var removed
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
        return "That item is not in your cart."
    }

function placeOrder(cardNumber) {
//    var freshArray = [];
    if (cardNumber === undefined) {
      return "Sorry, we don't have a credit card on file for you."
    } else {
      return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    setCart([])
  //  cart.splice(0, cart.length)
  }
  //return cart
}
