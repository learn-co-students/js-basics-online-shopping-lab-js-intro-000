var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
    return cart;
}

function addToCart(item) {
    var itemObject ={}
    console.log(`${item} has been added to your cart.`);
 //   item.price = Math.floor(Math.random() * 101);
    itemObject[item] = Math.floor(Math.random() * 101);
    cart.push(itemObject);
    return cart;
}

function viewCart() {
    var message = "In your cart, you have "
    var cart = getCart();

    if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
    }  else {
       for (var i = 0; i < cart.length; i++) {
          var item = cart[i];
          for (var itemName in item) {
            message += `${itemName} at $${item[itemName]}, `
          }
      }
    }
    console.log(message.slice(0, -2) + ".");
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function removeFromCart(name) {
  var cart = getCart();
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      if (item.hasOwnProperty(name)) {
        cart.splice(i,1);
        return cart;
      }
    }
    console.log("That item is not in your cart.");
}

function placeOrder(creditCardNumber) {
    if (typeof(creditCardNumber) === 'number') {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
      cart = [];
    } else {
      console.log("We don't have a credit card on file for you to place your order.");
    }
}