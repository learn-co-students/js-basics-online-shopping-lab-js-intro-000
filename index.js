var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = { [item]: Math.floor(Math.random() * 100) + 1 };
  cart.push(newObject);
  console.log(`${[item]} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var result = "In your cart, you have ";
  if (Object.keys(cart).length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else if (Object.keys(cart).length === 1) {
    var obj = cart[0];
    var itemName = Object.keys(obj);
    var price = obj[itemName];
    result += `${itemName} at $${obj[itemName]}.`;
  } else if (Object.keys(cart).length === 2) {
    var obj1 = cart[0];
    var itemName1 = Object.keys(obj1);
    var price1 = obj1[itemName1];
    var obj2 = cart[1];
    var itemName2 = Object.keys(obj2);
    var price2 = obj2[itemName2];
    result += `${itemName1} at $${price1} and ${itemName2} at $${price2}.`;
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      var obj = cart[i];
      var itemName = Object.keys(obj);
      var price = obj[itemName];
      result += `${itemName} at $${price}, `
    }
    var obj = cart[cart.length - 1];
    var itemName = Object.keys(obj);
    var price = obj[itemName];
    result += `and ${itemName} at $${price}.`;
  }
  console.log(result);
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var price = obj[Object.keys(obj)];
    sum += price;
  }
  return sum;
}

function removeFromCart(item) {
  var keys = [];
  for (let i = 0; i < cart.length; i++) {
    var obj = cart[i];
    if (obj.hasOwnProperty(item)) {
      var listy = cart.slice(0,i);
      var listz = cart.slice(i+1, cart.length);
      cart = listy.concat(listz);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
