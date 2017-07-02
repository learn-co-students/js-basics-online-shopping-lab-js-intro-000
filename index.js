var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item]: Math.floor(Math.random() * 100) });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  var sentence = `In your cart, you have `;
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item]
    if (cart.length === 1) {
      sentence += `${item} at $${price}.`;
    } else if (cart.length === 2) {
      if (i === 0) {
        sentence += `${item} at $${price} `;
      } else {
        sentence += `and ${item} at $${price}.`;
      }
    } else if (cart.length > 2) {
      if (i < cart.length - 1) {
        sentence += `${item} at $${price}, `;
      } else {
        sentence += `and ${item} at $${price}.`;
      }
    }
  }
  return sentence;
}

function total() {
  var totalPrice = 0;
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item]
    totalPrice = totalPrice + price;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var i = 0;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])) {
      cart.splice(i,1);
      return cart;
    } else {
      null;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  purchaseStatement = "";
  if (!cardNumber) {
    purchaseStatement += `Sorry, we don\'t have a credit card on file for you.`;
  } else {
    purchaseStatement += `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
  }
  return purchaseStatement;
}
