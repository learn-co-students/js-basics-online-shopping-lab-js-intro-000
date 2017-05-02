

var cart = []

function getCart() {
 return cart
}

function setCart(newCart) {
  cart = newCart;
}

function getPrice(){
  var price = Math.floor(Math.random()* 100);
  return price;
}

function addToCart(item) {
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
  var itemInCart = false
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

/*
var total = sessionStorage.getItem( "total" );
console.log( total ); // '120', a string
*/

function total() {
  var t =  0;
  for(var i = 0; i < cart.length; i++){
    var currentItem = cart[i]
    var thisItemsKey = Object.keys(currentItem)[0]
    var thisItemsPrice = currentItem[thisItemsKey]
    t += thisItemsPrice
  }
    return t;
}

      /*
      debugger
      console.log([i])
      console.log(cart[i])
      console.log(Object.values(data);
      for (var item in cart[i]) {
      var value = item[key];
       //do something with value;

      }
      return t;
 }
*/


var cardNumber
function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  setCart([]);
}
//> myObj = { "pizza": 25}
//{ pizza: 25 }
//> myObj['pizza']
//25
//> myObj[0]
//undefined
//> myKeys = Object.keys(myObj)
//[ 'pizza' ]
//> myKeys = myKeys[0]
//'pizza'
//> myObj[myKeys]
//25
//> myKeys = Object.keys(myObj)
//[ 'pizza' ]
//> myObj[myKeys]
//25
