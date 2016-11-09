var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let tot = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      tot = tot + cart[i][item];
    }
  }

  return tot;
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  //cart[item] = price;
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var cartArr = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var index in getCart()) {
      var key = Object.keys(cart[index]);
      var cost = cart[index][key];
      cartArr.push(` ${key} at ${cost}`);

    }
    var newCart = cartArr.join(",");
    console.log(`In your cart, you have${newCart}.`)
  }
}

function removeFromCart(item) {

}
