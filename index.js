var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {
   [item] : Math.floor(Math.random() * 100)
 }
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}
// addToCart("Orange");
// addToCart("Puppy");
// addToCart("Candy");
// addToCart("Dress");

function viewCart() {
    if (cart.length < 1) {
      console.log("Your shopping cart is empty.");
      return;
    }
    if (cart.length == 1){
      for (var i = 0; i < cart.length; i++) {
        var temp = cart[i];
        var key = Object.keys(temp)[0];
        var value = temp[key];
        console.log(`In your cart, you have ${key} at $${value}.`);
        return;
      }
    }
    if (cart.length == 2) {
        var temp = cart[0];
        var tempTwo = cart[1];
        var key = Object.keys(temp)[0];
        var keyTwo = Object.keys(tempTwo)[0];
        var value = temp[key];
        var valueTwo = tempTwo[keyTwo];

        console.log(`In your cart, you have ${key} at $${value} and ${keyTwo} at $${valueTwo}.`);
        return;
      }

      else {
        var sent = "In your cart, you have ";
        for (var i = 0; i < cart.length - 1; i++) {
          var cartObject = cart[i];
          var key = Object.keys(cartObject)[0];
          var value = cartObject[key];
          sent = `${sent}${key} at $${value}, `;
        }
        var lastObject = cart[cart.length - 1];
        var lastKey = Object.keys(lastObject)[0];
        var lastValue = lastObject[lastKey];
        sent = `${sent}and ${lastKey} at $${lastValue}.`;
        console.log(sent);
        return;
      }


      }
//viewCart();

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var key = Object.keys(item)[0];
    var value = item[key];
    sum = sum + value;
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var current = cart[i];
    var key = Object.keys(current)[0];
    if (item == key) {
      cart.splice(i, 1)
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  var totalPrice = total();
  if (cardNumber) { //this breaks down to undefined if no number is given
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return;
  }
  console.log("Sorry, we don't have a credit card on file for you.");
  return;
}
