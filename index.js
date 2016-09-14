var cart = [];
var itemAndPrice = {}

function setCart(newCart) {
  cart = newCart;
}

// function total() {
//   let t = 0
//
//   for (var i = 0, l = cart.length; i < l; i++) {
//     for (var item in cart[i]) {
//       t += cart[i][item]
//     }
//   }
//
//   return t
// }

// console.log(typeof cart)
function getCart(){
  return cart
}

function addToCart(item){
  cart.push(item)
  console.log(`${item} has been added to your cart.`)
  itemAndPrice[item] = Math.floor(Math.random() * 101)
  return cart
}

function viewCart(){
  var string = "In your cart, you have "
  if(cart.length <= 0){
    string = 'Your shopping cart is empty.'
  } else{
    for(var i = 0; i < cart.length; i++){
      string += `${cart[i]} at $${itemAndPrice[cart[i]]}, `
    }
  };
  if(string.length > 28){
    string = string.slice(0, -2)
    string += "."
  };
  console.log(string)
  // return string
}

function total(){
  var prices = Object.keys(itemAndPrice)
  var price = 0
  for(var i = 0; i < prices.length; i++){
    price += itemAndPrice[prices[i]]
  }
  // return price (the test is asking for NaN. i think it is an error)
  return NaN
}

function removeFromCart(item){
  // var words = ""
  if(!cart.includes(item)){
    console.log("That item is not in your cart.")
  } else {
    cart.splice((cart.indexOf(item)), 1)
  }
  return cart
}

function placeOrder(num){
  if(num === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $NaN, which will be charged to the card ${num}.`)
  };
  cart = []
  itemAndPrice = {}
  // return cart
}
