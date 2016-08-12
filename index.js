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

function getCart(){
  return cart;
}

function addToCart(item){
  var item = item;
  var price = Math.floor(Math.random()*100);
  var list = {item: price};
  cart.push(item);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    var sent = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++){
      for (var item in cart[i]){
        sent += `${item} at $${cart[i][item]}${i !== cart.length-1 ? ', ' : '.'}`;
      }
    }
  }
  console.log(sent);
}
