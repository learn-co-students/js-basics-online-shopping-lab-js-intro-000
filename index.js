var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var itemObj = {itemName: item, itemPrice: price};
    cart.push(itemObj);
  return `${item} has been added to your cart.`;
}


function viewCart() {
      if (cart.length === 0) {
        return `Your shopping cart is empty.`
      } else if (cart.length === 1) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
      } else if (cart.length === 2) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
      } else if (cart.length >= 3 ) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
      }
}

function total() {
  let allPrices = []
  let sum = 0
  for (var i = 0; i < cart.length; i++) {
    allPrices.push(cart[i].itemPrice)
    sum += allPrices[i]
  }
  return sum
}

function removeFromCart(item) {
  var itemName = []
  for(var i = 0; i < cart.length; i++){
    itemName.push(cart[i].itemName)
    }
  var index = itemName.indexOf(item)
  if(index > -1){
     cart.splice(index, 1)
     return cart
  } else {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
      return "Sorry, we don't have a credit card on file for you."
  } else {
      const total1 = total()
      cart = []
      return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
  }
}
