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
  var o = {
    [item]: (Math.floor(Math.random() * 100) + 1)
  };
  cart.push(o);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  // write your code here
  var res = 'In your cart, you have ';
  switch (cart.length) {
    case 0:
      console.log('Your shopping cart is empty.');
      break;
    case 1:
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
      break;
    case 2:
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}, and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
      break;
    default:
      for (var i = 0; i < cart.length; i++) {
        (i < cart.length - 1 ? res += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, and ` : res += `${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)
      }
      console.log(res);
  }
}

function total() {
  // write your code here
  var bill = 0;
  for (var i = 0; i < cart.length; i++) {
    bill += Number.parseInt(Object.values(cart[i]));
  }
  return bill;
}

function removeFromCart(item) {
  // write your code here
  var b = false;
  var index = 0;
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      index = i;
      b = true;
    }
  }

  if (b == true) {
    cart.splice(index, 1)
  } else if (cart.length == 0 || b == false) {
    console.log('That item is not in your cart');
  }

  // (b == true ? cart.splice(index, 1) : console.log('That item is not in your cart'));
}


function placeOrder(cardNumber) {
  // write your code here
  var bill = 0;
  bill = total();
  if (cardNumber == undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is ${bill}, which will be charged to the card ${cardNumber}`);
  }

}
