var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100)
 console.log(`${item} has been added to your cart.`)
 cart.push({[item]:price})
 return cart
}

function viewCart() {
if (cart.length === 0) {
  console.log("Your shopping cart is empty.")
}else {
  var cartitems = 'In your cart, you have '
for (var i = 0 ; i<cart.length ; i++) {
  var tempkey = Object.keys(cart[i])  //temporarily store the item name 
  var tempvalue = cart[i][tempkey] //temporarily store the item value 
  cartitems = cartitems + `${tempkey} at $${tempvalue}${i+1===cart.length?'.' : ', '}`
  }
  console.log(cartitems)
}
}

function total() {
  var totalvalue=0
  for (var items in cart) {
    var tempkey = Object.keys(cart[items])  //temporarily store the item name 
    var tempvalue = cart[items][tempkey] //temporarily store the item value 
    totalvalue+=tempvalue
  }
  return totalvalue
}

function removeFromCart(item) {
  var i=0
  while (i<cart.lengthcart && [i].hasOwnProperty(item)!=true) {  //as long as item number 1 doesnt match, check gain
    i++
  }
  if (i===cart.length) {  //if all items are checked, than return the item is not in cart
    console.log('That item is not in your cart.')
  }else {
      cart = [...cart.slice(0,i),...cart.slice(i+1)]
      return cart
  }
}

function placeOrder(cardNumber) {
if (cardNumber===undefined) {
console.log('We don\'t have a credit card on file for you to place your order.')
}
else  {
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
cart = []
}
}
