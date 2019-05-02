var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var c = getCart();
  var price = Math.floor(Math.random() * 100) + 1;
  c.push({itemName: item, itemPrice: price});
  setCart(c);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var c = getCart();
  if (c.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var view = "In your cart, you have ";
    for (var i = 0; i < c.length; i++) {
      view += c[i].itemName;
      view += " at $" + c[i].itemPrice;
      if (c.length > 1 && i < c.length - 2) {
        view += ", ";
      } else if (i === c.length - 2) {
        view += ", and ";
      }
    }
    view += ".";
    return view;
  }
}

function total() {
  var total = 0;
  var c = getCart();
  for (var i = 0; i < c.length; i++) {
    total += c[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var c = getCart();
  var index = c.findIndex(x => x.itemName === item);
  console.log(item, index);
  if (index > -1) {
    c.splice(index, 1);
    setCart(c);
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    setCart([]);
    return message;
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
