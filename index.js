var cart = [];

function setCart(newCart) {
  cart = newCart;
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
function getCart() {
  return cart;
}

function addToCart(item) {
  const newItem = {};
  const price = Math.floor(Math.random()* 10)
  newItem[item] = price;
  cart.push(newItem)
  console.log(item + " has been added to your cart.")
  return cart;

}

function viewCart() {
  const view = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  for (var i = 0; i < cart.length; i++) {
    let it = cart[i]
    let which = Object.keys(it)[0]
    let may = it[which]
    view.push(which + " at $" + may)
  }

  console.log("In your cart, you have " + view.join(", ") + ".");

}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    cart[i].hasOwnProperty(item)
    cart = cart.slice(0, i).concat(cart.slice(i + 1))
  }
  if (true) {
    console.log("That item is not in your cart.");
  }

  return cart;
}


function placeOrder(credit) {
  if (!arguments.length) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + credit + ".");

    cart = [];
  }
}
