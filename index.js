var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
   obj[item] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
   cart.push(obj);
   obj = {};
   console.log(item + ' has been added to your cart.');
   return cart;
}

function viewCart() {
  // write your code here
  var str = '';
  var finalStr = '';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else if (cart.length === 1) {
    cart.forEach(function(obj) {
      Object.keys(obj).forEach(function(itemKey) {
        str += (itemKey + ' at $' + obj[itemKey]);
      });
    });
    console.log( 'In your cart, you have ' + str+".");
  } else if (cart.length === 2) {
    for (var i = 0; i < cart.length - 1; i++) {
      for (var keys in cart[i]) {
        str += (keys + ' at $' + cart[i][keys] + ' and ');
      }
    }
    for (var j = cart.length - 1; j < cart.length; j++) {
      for (var key in cart[j]) {
        finalStr += (key + ' at $' + cart[j][key] + '.');
      }
    }
    console.log( 'In your cart, you have ' + str + finalStr);
  } else {
    for (var i = 0; i < cart.length - 1; i++) {
      for (var keys in cart[i]) {
        str += (keys + ' at $' + cart[i][keys] + ', ');
      }
    }
    for (var j = cart.length - 1; j < cart.length; j++) {
      for (var key in cart[j]) {
        finalStr += ('and ' + key + ' at $' + cart[j][key] + '.');
      }
    }
    console.log('In your cart, you have ' + str + finalStr);
  }
}

function total() {
  // write your code here
  var total = 0;
  cart.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
      total += obj[key];
    });
  });
  return total;
}

function removeFromCart(item) {
  // write your code here
  var flag = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i][item]) {
      flag = true;
      cart.splice(i, 1);
    }
  }
  if (flag === true) {
    return cart;
  } else {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log( "Sorry, we don't have a credit card on file for you.");
  } else {
    var final = total();
    cart = [];
    console.log (
      'Your total cost is $' +
      final +
      ', which will be charged to the card ' +
      cardNumber +
      '.'
    );
  }
}
