var cart = [];


function addToCart(purchase) {
  var price = Math.floor(Math.random()*10);
  var object = {[purchase]: price};
  cart.push(object);
  console.log(purchase + ' has been added to your cart.');
  return(cart)
}

function viewCart() {
  if (cart.length !=0) {


    for (var mealName in meals) {
      console.log(`I ate ${meals[mealName]} for ${mealName}!`)
    }

    for (var item in cart) {
      return(`${cart[item]} for ${mealName}`)
    }
  }else {
    return('Your shopping cart is empty.')
  }
}

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
  return(cart)
}
