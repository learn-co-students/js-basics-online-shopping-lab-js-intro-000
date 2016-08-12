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
  cart.push(list);
  var update = `${item} has been added to the cart.`;
  console.log(update);
  return cart;
}
