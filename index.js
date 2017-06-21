var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { [item] : Math.floor(Math.random() * 100)};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
   var cartVals = [];
  for (let i=0 ; i < cart.length ; i++) {
    cartVals.push(cart[i][Object.keys(cart[i])]);
  }
  if (cart.length === 1) {
        console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cartVals[0]}.`);
      } else if (cart.length === 2) {
          console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cartVals[0]} and ${Object.keys(cart[1])} at $${cartVals[1]}.`);
    } else if (cart.length > 2) {
        var array = [];
        for (let i=0; i < cart.length-1; i++) {
            array.push(` ${Object.keys(cart[i])} at $${cartVals[i]}`);
                      }
            console.log(`In your cart, you have` + array + `, and ${Object.keys(cart[cart.length-1])} at $${cartVals[cart.length-1]}.`);
  } else {
      console.log(`Your shopping cart is empty.`);
    }
}

function total() {
  var total = 0
 for (let i=0 ; i < cart.length ; i++) {
   total += cart[i][Object.keys(cart[i])];
 }
 return total;
}

function removeFromCart(item) {
  const sameThing = cart.length
  for (let i=0 ; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1);
    return cart;
    }
  }
  if (sameThing == cart.length) {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
