var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item] : Math.round(Math.random() * 100)})
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var retString = "In your cart, you have ";

  switch(cart.length) {
    case 0:
      retString = "Your shopping cart is empty.";
      break;
    case 1:
      retString += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
      break;
    case 2:
      retString += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
      break;
    default:
      for(let i = 0; i < cart.length; i++){
        if(i === cart.length - 1) {
          for(let item in cart[i]) {
            retString += `and ${item} at $${cart[i][item]}.`
          }

        } else {
          for(let item in cart[i]){
            retString += `${item} at $${cart[i][item]}, `
          }
        }
      }
    }
    console.log(retString);
}

function total() {
  var tote = 0;
  for(let i = 0; i < cart.length; i++) {
    for(let key in cart[i]) {
      tote += cart[i][key];
    }
  }
  return tote;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");

  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
