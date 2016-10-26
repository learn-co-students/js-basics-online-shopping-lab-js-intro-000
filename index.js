var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getLength() {
  return cart.length;
}

function total() {
  let t = 0;

  for (var i = 0; i < getLength(); i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (getLength() > 0) {
    var view = [];
    for (var i = 0; i < getLength(); i++){
      let item = Object.keys(cart[i])[0];
      view.push(item + " at $" + cart[i][item]);
    }
    console.log("In your cart, you have " + view.join(", ") + ".");
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  var notInCart = true;
  for (var i = 0; i < getLength(); i++){
    if (Object.keys(cart[i])[0] === item) {
      var notInCart = false;
      cart.splice(i, 1);
    }
  }
  if (notInCart){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cc) {
  if (!cc) {
    console.log("We don\'t have a credit card on file for you to place your order.");
  } else {
    console.log('Your total cost is $' +  total() + ', which will be charged to the card ' + cc +'.');
    setCart([]);
  }
}
