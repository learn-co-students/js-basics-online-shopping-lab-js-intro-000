var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var itemPrice = Math.floor(Math.random()*Math.floor(100));
var itemAdded = {[item]: itemPrice}
cart.push(itemAdded);
console.log(`${[item]} has been added to your cart.`)
return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  }
  else if (cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  }
  else if (cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  } else {
    var sentence = `In your cart, you have `
    for (let i= 0; i < (cart.length); i++){
      if (i < (cart.length - 1)){
        sentence += (`${Object.keys(cart[i])} at $${Object.values(cart[i])}, `)
      } else {
        sentence +=(`and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)
        console.log(sentence)
      }
    }
  }
}

function total() {
  // write your code here
  var totalCost = 0
  for (let i = 0; i < cart.length; i++){
    totalCost += parseInt(Object.values(cart[i]))
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  var inCart = false

  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart = cart.slice(0,i).concat(cart.slice(i+1))
      var inCart = true
      console.log(cart)
    }
  }
  if (!inCart){
    console.log(`That item is not in your cart.`)
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log (`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`);
    return cart = [];
  }
}
