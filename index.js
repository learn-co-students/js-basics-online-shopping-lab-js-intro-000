// var cart;
var cart = [];


function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(a) {
  var price = Math.floor(Math.random()*100);
  cart.push({[a]: price});
  console.log(a +" has been added to your cart.")
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var objectFromArray, keysOfObjects, item;
    var stringForOutput = 'In your cart, you have ';
    for (var i=0; i < cart.length; i++) {
      objectFromArray = cart[i];
      keysOfObjects = Object.keys(objectFromArray);
      item = objectFromArray[keysOfObjects];
      if (i == (cart.length - 1)) {
        stringForOutput += keysOfObjects + ' at $' + item + '.';
      } else  {
        stringForOutput += keysOfObjects + ' at $' + item + ', ';
      }
    }
    console.log(stringForOutput);
  } else {
    console.log('Your shopping cart is empty.');
  }
}


function removeFromCart(item) {
  var objectFromArray, keysOfObjects, index;
  var empty = true;
  for (var i=0; i < cart.length; i++) {
    objectFromArray = cart[i];
    keysOfObjects = Object.keys(objectFromArray);
    index = keysOfObjects.indexOf(item);
    if (index >= 0) {
      cart.splice(index, 1);
      empty = false;
    }
  }
  if (empty){
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(ccNum) {
  if (ccNum) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`);
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  return cart = [];
}
