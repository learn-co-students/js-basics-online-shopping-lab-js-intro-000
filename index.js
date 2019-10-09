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
  var objt = {[item]: Math.floor(Math.random() * 100)};
  cart.push(objt);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var arr = [];
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.length; i++) {
      var itemObject = cart[i]
      var name = Object.keys(itemObject)[0];
      var cost = itemObject[name];
      if(i=== cart.length-1 && i !== 0) {
        arr.push(`and ${name} at $${cost}`)
      } else {
        arr.push(`${name} at $${cost}`);
      }

    }
    if(cart.length >= 3){
      arr = arr.join(", ");
    } if(cart.length === 2) {
      arr = arr.join(" ");
    }
    console.log(`In your cart, you have ${arr}.`);
  }

}

function total() {
  // write your code here
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    var itemObject = cart[i]
    var name = Object.keys(itemObject)[0];
    var cost = itemObject[name];
    totalCost = totalCost + cost;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  var listObj = {};
  for (var i = 0; i < cart.length; i++) {
    var itemObject = cart[i];
    Object.assign(listObj, itemObject);
  }
  if(!listObj.hasOwnProperty(item)) {
    console.log("That item is not in your cart.");
  } else if (listObj.hasOwnProperty(item)) {
    delete listObj[item];
    cart = Object.keys(listObj).map(function(key) {
      var eachObj = {};
      eachObj[key] = listObj[key];
      return eachObj;
    });
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
