var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cost = Math.floor(Math.random() * 101);
 var newItem = item
 cart.push({[newItem]: cost});
 console.log(newItem + " has been added to your cart.")
 return getCart();
}

function viewCart() {
  const arrPrint = []
    if(cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        // example: {pizza: 24} - ['pizza']
        var item = Object.keys(cart[i])[0]
        var price = cart[i][item]
        arrPrint.push(`${item} at $${price}`)
      }
      console.log(`In your cart, you have ${arrPrint.join(', ')}.`)
    } else {
      console.log("Your shopping cart is empty.")
    }
  }

function total() {
  var price = 0
  cart.forEach(function(obj) {
    var itemName = Object.keys(obj)[0]
    price += obj[itemName]
  })
  return price;
};

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1); //
        return cart;
      }
  }
      console.log("That item is not in your cart.")
    }

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
 cart = [];
}
