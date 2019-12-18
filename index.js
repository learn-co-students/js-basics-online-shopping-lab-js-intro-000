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
 var item = {
   itemName: `${item}`,
   itemPrice: Math.floor(Math.random() * 100)
 };

   cart.push(item);
   return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var template = 'In your cart, you have';
  if (cart.length < 1) {
    return 'Your shopping cart is empty.';
  } else if (cart.length < 2) {
    var itemName = cart[0]["itemName"];
    var itemPrice = "at $" + cart[0]["itemPrice"];
    return `${template} ${itemName} ${itemPrice}.`;
  } else {
    var tempArr = [];
    for (var i = 0; i < cart.length; i++) {
      var itemName = cart[i]["itemName"];
      var itemPrice = " at $" + cart[i]["itemPrice"];

      if (i != cart.length - 1) {
      var nameAndPrice = itemName.concat(itemPrice);
      tempArr.push(nameAndPrice);
      } else {
      var lastNameAndPrice = "and " + itemName.concat(itemPrice);
      tempArr.push(lastNameAndPrice);
      }
      //tempArr.push(lastNameAndPrice);
    }
    var joinedArr = tempArr.join(', ')
    return `${template} ${joinedArr}.`;
  }
}

function total() {
  // write your code here
  var allElement = [];
  for (var i = 0; i < cart.length; i++) {
    var eachElement = cart[i]['itemPrice'];
    allElement.push(eachElement);
  }

  return allElement.reduce((a, b) => a + b)
}

function removeFromCart(item) {
  // write your code here
  var found = true;
  var x = 0;
  var newCart = cart.length;
  for (var i = 0; i < cart.length; i++) {

    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      break;
    }
    x++
  }

  if ((x === newCart) === true) {
      return 'That item is not in your cart.';
    } else {
      return cart;
    }
}

function placeOrder(cardNumber) {
  // write your code here
  //var number = isNaN(cardNumber);
  if (Number.isInteger(cardNumber) === false) {
    return "Sorry, we don't have a credit card on file for you."
  }

  var x = total();
  cart = [];
  return `Your total cost is $${x}, which will be charged to the card ${cardNumber}.`;
}
