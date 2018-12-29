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
 var price = Math.floor(Math.random() * 100) + 1;

 var object = {};
 object.itemName = item;
 object.itemPrice = price;

 cart.push(object);

 return item + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
  } else {
    var listOfItemsWithoutLast = [];

    for (var x = 0; x < cart.length - 1; x++) {
      listOfItemsWithoutLast.push(" " + cart[x].itemName + " at $" + cart[x].itemPrice);
    }

    return "In your cart, you have" + listOfItemsWithoutLast + ", and " + cart[cart.length-1].itemName + " at $" + cart[cart.length-1].itemPrice + ".";
  }
}

function total() {
  // write your code here
  var sum = [];
  for (var x = 0; x < cart.length; x++) {
    sum.push(cart[x].itemPrice);
  }

  var result = 0
  for (let i = 0; i < sum.length; i++) {
    result = result + sum[i];
  }

  return result;
}

function removeFromCart(item) {
  // write your code here

  for (var x = 0; x < cart.length; x++) {
    if (item === cart[x].itemName) {
      cart.splice(x, 1);
    }
  }

  if (cart.includes(item) === false) {
    return "That item is not in your cart.";
  }

  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var totalPrice = total();

  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return "Your total cost is $" + totalPrice + ", which will be charged to the card " + cardNumber + ".";

  }
}
