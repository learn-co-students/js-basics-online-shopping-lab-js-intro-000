var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var o = { itemName: item,
            itemPrice: Math.floor(1 + Math.random() * 99.9)
          };
  cart.push(o);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  var s = 'In your cart, you have';
  for (var i = 0; i<cart.length; ++i) {
    s += ` ${cart[i].itemName} at \$${cart[i].itemPrice}`;
    if (i === cart.length - 1)  s += '.';  // final item
    else                        s += ',';  // not final item
    if (i === cart.length - 2)  s += ' and';
  }
  return s;
}

function total() {
  var t = 0;
  for (var i=0; i<cart.length; ++i) {
    t += cart[i].itemPrice;
  }
  return t;
}

function removeFromCart(item) {
  var n = 0;
  for (var i=0; i<cart.length; ++i) {
    if (cart[i].itemName === item) {
      ++n;
      cart.splice(i, 1);
      --i;
    }
  }
  if (n===0)  return "That item is not in your cart.";
  else        return cart;
}

function placeOrder(cardNumber) {
  if (! cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var t = total();
  cart = [];
  return `Your total cost is \$${t}, `
       + `which will be charged to the card ${cardNumber}.`;
}
