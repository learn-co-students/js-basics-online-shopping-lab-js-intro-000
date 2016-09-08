var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  let price = Math.floor((Math.random() * 100))
  cart.push({item:price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  let cart = getCart();
  if (cart === []) return console.log("Your shopping cart is empty.");
  else {
    for (var item in cart) {
      console.log(`In your cart you have ${cart[item]} at ${cart.item}`)
    }
  }
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
