var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100);
 cart.push({ itemName: item, itemPrice: price });
 return `${item} has been added to your cart.`
};

function viewCart() {
  // write your code here
  if (cart.length > 0) {
    var cartContents = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      if (cart.length == 1 && i == 0) {
        cartContents = cartContents.concat(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`);
      } else if (i + 1 == cart.length) {
        cartContents = cartContents.concat(`and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`);
      } else {
        cartContents = cartContents.concat(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `);
      }
    } return cartContents;
  } else {
    return "Your shopping cart is empty."
  }
};

function total() {
  // write your code here
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i]["itemPrice"];
  } return totalPrice;
};

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] == item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
};

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    function total() {
      // write your code here
      var totalPrice = 0
      for (var i = 0; i < cart.length; i++) {
        totalPrice = totalPrice + cart[i]["itemPrice"];
      } return totalPrice;
    }
    var cartTotal = total();
    cart.splice(0, cart.length);
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
};
