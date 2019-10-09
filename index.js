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
 var price = 100*Math.random()
 price = Math.floor(price)
 let dummyObj = {}
 dummyObj[item]=price
 cart.push(dummyObj)
 console.log(item+' has been added to your cart.');
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length==0) {
    console.log('Your shopping cart is empty.');
  } else {
    if (cart.length==1) {
      var item = Object.keys(cart[0])
      var message = `In your cart, you have ${item} at \$${cart[0][item]}.`;
      console.log(message);
    }
    if (cart.length==2) {
      var item = Object.keys(cart[0])
      var message = `In your cart, you have ${item} at \$${cart[0][item]}, `;
      item = Object.keys(cart[1])
      message = message + item + ` at \$${cart[0][item]}.`
      console.log(message);
    }
    if (2<cart.length) {
      var item1 = Object.keys(cart[0])
      var message = `In your cart, you have ${item1} at \$${cart[0][item1]}, `;
      var cartObjPartial={}
      for (var i = 1; i < cart.length-1; i++) {
        Object.assign(cartObjPartial,cart[i]);
      }
      for (var itemNames in cartObjPartial) {
        message = message + `${itemNames} at \$${cartObjPartial[itemNames]}, `
      }
      var lastItem = Object.keys(cart[cart.length-1])
      message = message + `${lastItem} at \$${cart[cart.length-1][lastItem]}.`
      console.log(message);
    }
      }
        }

function total() {
  // write your code here
  var cartObj={}
  for (var i = 0; i < cart.length; i++) {
    Object.assign(cartObj,cart[i]);
  }
  var totalCost = 0
  for (var items in cartObj) {
    totalCost = totalCost + cartObj[items]
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  var cartObj={}
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = []
}
