var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartItem = {};

  cartItem.itemName = item;
  cartItem.itemPrice = Math.ceil(Math.random() * 100);
  cart.push(cartItem);

  return `${cartItem.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length < 1) { return 'Your shopping cart is empty.'; }
  var view = 'In your cart, you have ';

  for (var i = 0; i < cart.length; i = i + 1) {
    view = view + `${cart[i].itemName} at $${cart[i].itemPrice}`;

    if (i < cart.length - 1) { view = view + ', '; }
    if (i == cart.length - 2) { view = view + 'and '; }
  }

  return view + '.';
}

function total() {
  var sum = 0;

  for (var i = 0; i < cart.length; i = i + 1) {
    sum = sum + cart[i].itemPrice;
  }

  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i = i + 1) {
    if (item == cart[i].itemName) {
      cart.splice(i, 1);

      return cart;
    }
  }

  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }

  var order = 'Your total cost is $' + total() +
    ', which will be charged to the card ' + cardNumber + '.';

  cart = [];
  return order;
}
