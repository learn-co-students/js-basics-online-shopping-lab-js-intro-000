var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * Math.floor(100))
 cart.push({itemName:item, itemPrice:price})
 return `${item} has been added to your cart.`// write your code here
}

function viewCart(){
  var items = [];
  var prices = [];
  var arr = [];
  for (var i = 0; i < cart.length; i++){
    items.push(cart[i].itemName)
    prices.push(cart[i].itemPrice)
  }
  for (var x = 0; x < items.length; x++){
      arr.push(`${items[x]} at $${prices[x]}`)
    }
    var slice = arr.slice()
    var firstHalf = arr.slice(0,arr.length -1)
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    return "In your cart, you have "+ firstHalf.join(", ")+", and "+ slice.pop()+"."
  }
}


function total() {
var count = 0
 for (var i = 0; i < cart.length; i++){
    count = count + cart[i].itemPrice
  }
  return count
}

function removeFromCart(item) {
 for (var i = 0; i < cart.length; i++){
   if (cart[i].itemName === item){
      cart.splice(i,1)
      return cart
   }
 }
 return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.${cart = []}`)
  }
}
