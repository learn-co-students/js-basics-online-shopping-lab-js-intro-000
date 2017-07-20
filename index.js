var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({
    [itemName]: Math.floor(Math.random() * 100)
  });
  console.log(`${itemName} has been added to your cart.`);
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    log("Your shopping cart is empty.");
  } else {
    var itemsString = ""
    for (var i = 0; i < cart.length; i++) {
      var itemName = Object.keys(cart[i])[0];
      var itemPrice = cart[i][itemName];
      var isLastItem = i+1 == cart.length;

      if(cart.length > 1 && isLastItem) {
        itemName = 'and ' + itemName
      }

      itemsString += ` ${itemName} at $${itemPrice}`;

      if (cart.length > 2 && i+1 < cart.length) {
        itemsString += ','
      }
    }
    console.log(`In your cart, you have${itemsString}.`);
  }
}

function log(msg) {
  console.log(msg);
  console.warn(msg);
}

function total() {
  var totalValue = 0;
  for(var i = 0; i < cart.length; i++) {
    var currentItem = formatItem(cart[i]);
    totalValue += currentItem.price;
  }
  return totalValue;
}

function removeFromCart(itemToRemove) {
  var newCart = [];
  for(var i = 0; i < cart.length; i++) {
    var currentItem = formatItem(cart[i]);
    if (itemToRemove !== currentItem.name) {
      newCart.push(cart[i]);
    }
  }
  if (cart.length === newCart.length) {
    console.log("That item is not in your cart.");
  }
  cart = newCart;
}

function formatItem(item) {
  var name = Object.keys(item)[0];
  return {
    name: name,
    price: item[name]
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
