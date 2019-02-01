var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var nameOfThisItem = item
  var item = {itemName: nameOfThisItem, itemPrice: Math.floor(Math.random()*100),}
  cart.push(item);
  return `${nameOfThisItem} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var cartListStatement = 'In your cart, you have ';
    var cartList
    for (var i = 0; i < cart.length; i++) {
      var nextItem = (i === (cart.length - 1)) ? `and ${cart[i].itemName} at $${cart[i].itemPrice}.` : `${cart[i].itemName} at $${cart[i].itemPrice},`;
      cartList = (cartList === undefined) ? `${nextItem}` : `${cartList} ${nextItem}`;

    }
     return `In your cart, you have ${cartList}`;
  }
}


function total() {
  var runningTotal = 0
  for (var i = 0; i < cart.length; i++) {
    runningTotal = runningTotal + cart[i].itemPrice
  }
  return runningTotal
}

function removeFromCart(item) {
  console.log(cart);
  var itemIndex
  for (var i = 0; i < cart.length; i++) {
    if ( cart[i].itemName === item ) {
      itemIndex = i;
      break;
    } else {
      itemIndex = -1
    }
  }
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1);
    return cart;
  } else {
    return "That item is not in your cart."
  }
}


function placeOrder(cardNumber) {
 if (cardNumber > 0) {
   var totalCost = total()
   cart = []
   return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`

 } else {
   return "Sorry, we don't have a credit card on file for you."
 }
}
