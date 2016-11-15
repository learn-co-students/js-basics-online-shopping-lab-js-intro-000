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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(100*Math.random())
  console.log(`${item} has been added to your cart.`)
  cart.push({[item]: price})
  return cart
}

function viewCart() {
  var cartmsg = "In your cart, you have "
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var index = 0; index < cart.length; index++) {
      var itemList = cart[index];
      var item = Object.keys(itemList)[0]
      var price = itemList[item]
      cartmsg += `${item} at $${price}, `
    }
    console.log(cartmsg.slice(0,-2) + '.');
  }
}

// couldn't get this to work'
// function removeFromCart(item) {
//   var listHasItem = false
//   for(let x in cart) {
//     if (Object.keys(cart[x])[0] === item) {
//       listHasItem = true
//       delete cart[x][0]
//     }
//   }



//   if (listHasItem === false) {
//     console.log("That item is not in your cart.");
//   } 
//   if (listHasItem === true) {
//     return cart
//   }
// }


function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(creditcard) {
  if (creditcard) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditcard}.`)
    cart = []
  } else if (!creditcard) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}