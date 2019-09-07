var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNum = getRandomIntInclusive(1, 100);
  const newObject = new Object({[item]: randomNum});
  cart.push(newObject);
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  switch (cart.length) {
    case 0:
      console.log("Your shopping cart is empty.")
      break;
    case 1:
      const cartItem = cart[0];
      const key = Object.keys(cartItem);
      const value = Object.values(cartItem);
      console.log(`In your cart, you have ${key} at $${value}.`);
      break;
    case 2:
      // const key = cart[0].keys();
      // const value = cart[0].values();
      const cartItem1 = cart[0];
      const cartItem2 = cart[1];
      const key1 = Object.keys(cartItem1);
      const value1 = Object.values(cartItem1);
      const key2 = Object.keys(cartItem2);
      const value2 = Object.values(cartItem2);
      console.log(`In your cart, you have ${key1} at $${value1} and ${key2} at $${value2}.`);
      break;
    default:
      var output = "In your cart, you have "
      var i = 1
      while (i <= (cart.length - 1)) {
        var newCartItem = cart[i - 1];
        var newKey = Object.keys(newCartItem);
        var newValue = Object.values(newCartItem);
        var indexOutput = `${newKey} at $${newValue}, `;
        output += indexOutput
        i++
      }
      var lastCartItem = cart[cart.length - 1];
      var lastCartItemKey = Object.keys(lastCartItem);
      var lastCartItemValue = Object.values(lastCartItem);
      output += "and " + lastCartItemKey + " at $" + lastCartItemValue + ".";
      console.log(output)
  }
  return cart
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    var obj = cart[i];
    total += parseInt(Object.values(obj));
  }
  return total
}

function removeFromCart(item) {
  for (var i = cart.length; i--;) {
    var obj = cart[i];
    if (obj.hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return
  }
  var totalCost = total();
  let i = cart.length - 1;
  while (i >= 0) {
    var itemInCart = cart[i];
    var item = Object.keys(itemInCart);
    console.log(`item is ${item}`)
    removeFromCart(item);
    i--
  }
  console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
  return cart
}
