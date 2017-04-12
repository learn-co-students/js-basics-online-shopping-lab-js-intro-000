var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var obj = {};
  var randomPrice = Math.floor(Math.random() * 100);
  obj[item] = randomPrice;

 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var announcement = null;
  var items = [];

  if (cart.length < 1) {
    announcement = 'Your shopping cart is empty.';
  } else {
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]);
      var itemCost = getCart()[i][item];

      items.push(`${item} at $${itemCost}`);
    }

    var joined = items.join(', ');
    announcement = `In your cart, you have ${joined}.`;
  }

  console.log(announcement);
  return announcement;
}

function total() {
  // write your code here
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    var itemCost = getCart()[i][item];
    sum += itemCost;
  }

  return sum;
}

function removeFromCart(item) {
  var items = [];

  for (var i = 0; i < cart.length; i++) {
    var keys = Object.keys(cart[i]);
    items.push(keys.join())
  }

  var itemIndex = items.indexOf(item);

  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
  } else {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  var result = null;
  var newCart = [];
  var sum = 0;

  if (!cardNumber) {
    result = 'We don\'t have a credit card on file for you to place your order.';

  } else {
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]).join();
      var price = cart[i][item];
      sum += price;
    }


    result = `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
    console.log(result);

    cart = newCart;
  }

  console.log(result);
  return result;
}
