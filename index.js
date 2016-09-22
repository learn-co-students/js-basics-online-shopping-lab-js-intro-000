//TO DO:
var cart = [];
//Done

//TO DO:
function getCart() {
  return cart;
}
//Done

//TO DO:
function addToCart(item) {
  var newItem = {};
  newItem[item] = Math.floor(Math.random() * 100);
  console.log(newItem);
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`)
  return cart;
}
//Done

//TO DO:
function viewCart() {
  if (cart.length > 0) {
    var itemsText = "In your cart, you have ";
    var itemsDescription = [];
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i]
      for (var itemName in item) {
        var description = `${itemName} at $${item[itemName]}`
        }
      itemsDescription.push(description)
      }
    var output = itemsText + itemsDescription.join(", ") + "."
    console.log(output)
    }
  else {
    console.log("Your shopping cart is empty.")
  }
}
//Done

//TO DO:
function removeFromCart(itemName){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i, 1)
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}
//Done

//To Do
function placeOrder(cardNumber) {
  if (cardNumber) {
    //place order
    // var total = total()
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart = [];
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
