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
 let randNum = Math.floor(Math.random() * 100);
  let newItem = {
    itemName: item,
    itemPrice: randNum
  }
  cart.push(newItem)
  return `${newItem['itemName']} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';

  } else if (cart.length === 1) {
      return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]['itemPrice']}.`;
  } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`;
  } else {
   var array = []
   for (let i = 0; cart.length > i; i++) {
      array.push(` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
   }
   var listTwo = array.slice(array.length - 1)
   var listOne = array.slice(0, array.length - 1)
   return `In your cart, you have${listOne}, and${listTwo}.`
  }
}

function total() {
  // write your code here
  let sum = 0
  for (let i = 0; cart.length > i; i++) {
    sum = sum + cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; cart.length > i; i++) {
    if (cart[i]['itemName'] === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const yourTotal = total()
    cart = []
    return `Your total cost is $${yourTotal}, which will be charged to the card ${cardNumber}.`
  }
}
