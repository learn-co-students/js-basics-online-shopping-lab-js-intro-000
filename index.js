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
 var obj = {[item]: price};
 cart.push(obj);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length == 0) console.log("Your shopping cart is empty.");
  else {
    var sentence = 'In your cart, you have ';
    for (var i = 0; i < cart.length; i++) {
      var obj = cart[i];
      var item = Object.keys(obj)[0]
      var price = Object.values(obj)[0]
      if (cart.length == 1) {
        sentence += `${item} at $${price}.`
      } else if (cart.length == 2) {
        if (i == cart.length - 1) {
          sentence += `and ${item} at $${price}.`
        } else {
          sentence += `${item} at $${price} `
        }
      } else if (cart.length > 2) {
        if (i == cart.length - 1) {
          sentence += `and ${item} at $${price}.`
        } else {
          sentence += `${item} at $${price}, `
        }
      }
    }
    console.log(sentence)
  }
}

function total() {
  // write your code here
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var price = Object.values(obj)[0]
    sum += price;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var sum = total();
  if (cardNumber) {
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`)
    cart = [];
    return cart;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
