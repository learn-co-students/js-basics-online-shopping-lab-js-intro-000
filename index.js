var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var newItem = {
    itemName : item,
    itemPrice : price };

    cart.push(newItem);

    return `${newItem.itemName} has been added to your cart.`
  }


function viewCart() {

  var everythingInCart = [];
  for ( var i = 0; i < cart.length; i++) {
    everythingInCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
}

  if (cart.length === 0) {
  return 'Your shopping cart is empty.'
}

  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`;
  } else {
    var finalItem = everythingInCart.pop();
    return `In your cart, you have ${everythingInCart.join(', ')}, and ${finalItem}.`
  }

 }


function total() {
  let cartTotal = 0

  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice
  }
    return cartTotal
  }



function removeFromCart(item) {

  var removed = 0;
  for (let i = 0; i < cart.length; i++){

    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      removed = 1;
      i--;
    }
  }
  if (removed === 1) {
  return cart
} else {
  return 'That item is not in your cart.'
}

}

function placeOrder(cardNumber) {
  if(cardNumber) {
    var totalCost = total();
    cart = [];
    return `Your total cost is \$${totalCost}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
