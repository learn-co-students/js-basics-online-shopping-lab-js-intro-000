var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newbie = {[item]: Math.floor(Math.random() * 99 + 1)}
 getCart().push(newbie)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
    return
  } else{
  var string = `In your cart, you have`
  for (let i = 0;i<getCart().length;i++){
    var cartarray = Object.keys(getCart()[i])
    if (i === 0){
      string += ` ${cartarray[0]} at $${cart[i][cartarray[0]]}`
    }else if (i < getCart().length-1){
      string +=`, ${cartarray[0]} at $${cart[i][cartarray[0]]}`
    }
    else if (getCart().length == 2){
      string += ` and ${cartarray[0]} at $${cart[i][cartarray[0]]}`
    }
    else{
      string += `, and ${cartarray[0]} at $${cart[i][cartarray[0]]}`
    }
  }
  string += "."
  console.log(string)
  return
}
}

function total() {
  var moola = 0;
  for (let i = 0; i < getCart().length; i++) {
    moola += parseInt(getCart()[i][Object.keys(getCart()[i])[0]]);
  }
  return moola;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
  }}
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
    return
  } else {
    var moola = total()
    console.log(`Your total cost is $${moola}, which will be charged to the card ${cardNumber}.`)
    var cartarray = Object.keys(cart)
    while (cart.length>0){
      removeFromCart(cartarray[0])
    }
    return cart
}}
