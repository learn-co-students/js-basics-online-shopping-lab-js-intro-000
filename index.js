var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({ itemName: item, itemPrice: Math.floor((Math.random() * (100 - 1) + 1 ))});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
      if (cart.length === 1) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      } else {
        var newArray = [];
        for (var i = 0; i < (cart.length - 1); i++) {
          newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
        }
        var string = newArray.join(', ');
        return `In your cart, you have ${string}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
      }
    }
}

function total() {
  var prices = []
  for (var i = 0; i < cart.length; i++) {
    prices.push(cart[i].itemPrice)
  }
  return prices.reduce((a, b) => a + b) 
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      return cart
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {


    if(!cardNumber) {
      return `Sorry, we don't have a credit card on file for you.`
    } else {
      var result =  `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
      cart = [];
      return result;
    }

}


