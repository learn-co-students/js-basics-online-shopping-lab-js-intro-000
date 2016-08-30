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

var cart;
cart = [];
cart.push({socks: '9.99'});
cart.push({shoes: '100'});
//cart.push({dinner: 'spaghetti'});

function removeFromCart(item) {
  var obj;
  var mess;
  var HasItem = "False";

  if (cart.length ===0)
    mess = "Your shopping cart is empty";
  else
  {
    mess = "In your cart, you have ";
    for (var i = 0, l = cart.length; i < l; i++) {
      obj = cart[i];
      for (var n in obj) {
          if (n.hasOwnProperty(item) ) {
          cart.splice(i,1);
            HasItem = "True"
          }
        }
    }
    if (HasItem === "False")
      mess = "That item is not in your cart."
  }
  console.log(mess)
  return cart
}
