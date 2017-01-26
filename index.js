var cart = [];
var cart2 = {};
function getCart(){
  return cart;
}
function setCart(newCart) {
  cart = newCart;
}
function addToCart(item){
  cart.push({[item] : Math.floor(Math.random()*100)})
  cart2[item]=cart[cart.length-1][item]
  console.log(`${item} has been added to your cart.`)
  return cart
}
/* Yeah I don't get this at all.*/
function viewCart(){
  if (cart.length===0){
    console.log("Your shopping cart is empty.")
  } else {
    const oneCost = cart2['socks']
    const twoCost = cart2["puppy"];
    const threeCost = cart2["iPhone"];
    console.log(`In your cart, you have socks at $${oneCost}, puppy at $${twoCost}, iPhone at ${threeCost}.`)
  }
}

function removeFromCart(item){
  if (cart2.hasOwnProperty(item)) {
    delete cart2.item
    cart = []
  } else {
    console.log("That item is not in your cart.")

  }
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
var totalcost = total()
function placeOrder(cardnumber){
  if (cardnumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${totalcost}, which will be charged to the card $${cardnumber}`)}
  cart = []
}}
