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
  var price = Math.floor(Math.random(0,1) * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var cartList = [];
    for (var things in cart) {
      var price = cart[things];
      cartList.push(`${things} at $${price}`)
    }
    console.log(`In your cart, you have ${cartList.join(', ')}.`)
  }
}

function removeFromCart(item) {
  for (var things in cart) {
    if (things !== item) {
      console.log("That item is not in your cart.")
    } else if (things === item) {
      cart.splice(things)
    }
  } return cart
}
