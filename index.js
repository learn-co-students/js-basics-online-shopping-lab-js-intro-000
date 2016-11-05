var cart;
cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart() {
  var obj;
  var mess;

  if (cart.length ===0)
    mess = "Your shopping cart is empty";
  else
  {
    mess = "In your cart, you have ";
    for (var i = 0, l = cart.length; i < l; i++) {
      obj = cart[i];
      for (var n in obj) {

        if (i >0)
          mess = mess + ", ";

        mess = mess + `${n} at $${obj[n]}`
        }
    };
  }
  mess = mess + "."
  console.log(mess)
  return cart
};

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function removeFromCart(item) {
  var HasItem = "False";

  if (cart.length ===0)
    console.log("Your shopping cart is empty");
  else
  {

    for (var i = 0, l = cart.length; i < l; i++) {
        if (cart[i].hasOwnProperty(item)) {
          HasItem = "True";
          cart.splice(i,1);
        }
    }

      if (HasItem === "False")
        console.log("That item is not in your cart.");
  }
  if (HasItem === "False")
    console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber){

  var mess = "test";
  var t = 0;

  if (cardNumber === undefined)
    mess = "We don't have a credit card on file for you to place your order.";

  else {
    mess = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
  }

  console.log(mess);
  return cart;
}
