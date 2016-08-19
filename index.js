var cart;

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
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

function addToCart(item){
  cart.push(item)
  console.log(item + ' has been added to your cart.');
  return cart
}

function viewCart(){
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  else {
    var printItems = "'In your cart, you have "
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        printItems += item + "at " + "$"
      }
    }
    console.log(printItems)
  }
}
