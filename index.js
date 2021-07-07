var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // returns a random integer from 1 to 100
 var price = Math.floor(Math.random() * 100) + 1;

 cart.push({itemName: item, itemPrice: price});

 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var cartString = "In your cart, you have ";

    for (let i = 0; i < cart.length; i++) {
      cartString = `${cartString}${cart[i].itemName} at $${cart[i].itemPrice}`;

      if (cart.length > 1 && cart.length - i > 1) {
        cartString = `${cartString}, `;

        if (i === cart.length - 2) {
          cartString = `${cartString}and `;
        }
      }
    }

    cartString = `${cartString}.`;

    return cartString;
  }
}

function total() {
  var value = 0;

  for (let i = 0; i < cart.length; i++) {
    value += cart[i].itemPrice;
  }

  return value;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      if (i === 0) {
        cart.shift();
        return cart;
      } else if (i === cart.length) {
        cart.pop();
        return cart;
      } else {
        var temp = cart.splice(i, 1);
        return temp;
      }
    }
  }

  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }

  var value = total();
  cart = cart.splice();

  return `Your total cost is $${value}, which will be charged to the card ${cardNumber}.`;
}
