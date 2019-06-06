var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObject = {itemName:`${item}`, itemPrice:Math.floor(Math.random() * Math.floor(100))};
    if (item != null){
  cart.push(itemObject);
  return  `${item} has been added to your cart.`
    }
}


function viewCart() {
  var i = 0;
  var itemArray = [];
  for (i = 0; i < cart.length; i++) {
    var itemDesc = `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
    itemArray.push(itemDesc);
  } if (itemArray.length < 1) {
    return "Your shopping cart is empty.";
  } else if (itemArray.length > 1){
      var lastItem = itemArray.pop();
      return `In your cart, you have ${itemArray.join(", ")}, and ${lastItem}.`
  } else {
    return `In your cart, you have ${itemArray}.`
  }
}

function total() {
  var i = 0;
  var total = 0;
  for (i = 0; i < cart.length; i++) {
    total += getCart()[i].itemPrice;
  } return total;
}


function removeFromCart(item) {
  var output;
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    if (getCart()[i].itemName === item) {
      cart.splice([i], 1)
      return cart;
    }
  }
  return 'That item is not in your cart.';
}


function placeOrder(cardNumber) {
    if (cardNumber != null) {
      var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
      cart.length = 0;
      return msg;
    } else {
        return "Sorry, we don't have a credit card on file for you."
    }
}
