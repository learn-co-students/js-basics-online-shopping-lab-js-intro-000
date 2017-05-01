

var cart = []

function getCart() {
 return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
   function getPrice(){
   var price = Math.floor(Math.random()* 100);
   return price;
  }
   cart.push({[item]:getPrice()});
   console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {

    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
        }
    }
   console.log("In your cart, you have " + items.join(", ") + ".");
}
}


function removeFromCart(item) {
  var itemInCart =
  false
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      let index = cart.lastIndexOf(item)
      cart.splice(index, 1)
      itemInCart = true
      return cart;
  }
}

if (itemInCart === false) {
  console.log("That item is not in your cart.")
}
}


function total(item[i]) {
var t =  0;
           for (var i = 0; i < cart.length; i++) {
               for (t += Number(item[i]);
                }
            return t;
           }



function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`"Your total cost is $${total()}, which will be charged to the card ${cardNumber}."`)
  }
  cart = [];
}
