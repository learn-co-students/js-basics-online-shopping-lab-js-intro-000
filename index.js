var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = (Math.random()*100).toFixed();
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var str = "In your cart, you have ";
  if (cart.length > 0) {
    for (obj of cart) {
      for (var item in obj) {
        str+=`${item} at ${obj[item]}, `;
      }
    }
    console.log(str.slice(0,-2) +".");
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  for (index of cart) {
    
  }
}

function placeOrder() {
  
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
