var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = {};
   itemName[item] = Math.floor(Math.random() * 100);
   cart.push(itemName);
   console.log(`${item} has been added to your cart.`);
   return cart;
}

function viewCart() {
  var printItems = 'In your cart, you have ';

  switch(true) {

    case (cart.length === 1):
      var key = Object.keys(cart[0])[0];
      printItems += `${key} at $${cart[0][key]}.`;
      console.log(printItems);
      break;

    case (cart.length === 2):
      for (var i = 0; i < cart.length; i++) {
        var key = Object.keys(cart[i]);
        if(i === cart.length - 1) {
          printItems += `${key} at $${cart[i][key]}.`;
        } else {
          printItems += `${key} at $${cart[i][key]} and `;
        }
      }
      console.log(printItems);
      break;

    case (cart.length > 2):
      for(var i = 0; i < cart.length; i++) {
        var key = Object.keys(cart[i]);
        if(i === cart.length -1) {
          printItems += `and ${key} at $${cart[i][key]}.`;
        } else {
          printItems += `${key} at $${cart[i][key]}, `;
        }
      }
      console.log(printItems);
      break;

    default:
      console.log(`Your shopping cart is empty.`);
  }
}

function total() {
  var totalCost = 0;
  for(var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i]);
    var value = parseInt(cart[i][key]);
    totalCost += value;
  }
  return totalCost;
}

function removeFromCart(item) {
  var itemInCart = false;
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1);
      itemInCart = true;
      return cart;
    }
  }
  if(itemInCart === false) {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
}
