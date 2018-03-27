var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newitem = {
    [item] :(Math.floor(Math.random()* Math.floor(100)))
  }

cart.push(newitem)
console.log(`${item} has been added to your cart.`)
    return cart
}
function punctuation(i,length){
  if(length == 2 && i == 0){

    return " "
  }
  else if (i< length -1){
    return ", "
  }
else{
  return "."
  }
}

function viewCart() {
    if (cart.length > 0){
      var cartlist = `In your cart, you have `
      for (var i = 0;i<cart.length;i++){
        var cartobj = cart[i]
      var objkeys = Object.keys(cartobj)[0]
        if (cart.length > 1 && i == cart.length -1 ){
          cartlist += 'and '
        }
        cartlist +=`${objkeys} at $${cartobj[objkeys]}${punctuation(i,cart.length)}`
        }


        console.log(cartlist)
}
      else {
          console.log('Your shopping cart is empty.')
        }
}



function total() {
  var total = 0
  for (var i = 0;i<cart.length;i++){
    var cartobj = cart[i]
    var objkeys = Object.keys(cartobj)[0]
    var updatetotal = cartobj[objkeys]
    total += updatetotal
}

    return total
}
//try i in place of cartobjobjkeys
function removeFromCart(item) {
  for (var i = 0;i< cart.length;i++){
    var cartobj = cart[i]
    var objkeys = Object.keys(cartobj)[0]
    if (item == objkeys){
     cart.splice(i,1)

    }

}
  console.log(`That item is not in your cart.`)

return cart
}

function placeOrder(cardNumber) {
  var new_total = total()
  if (cardNumber != undefined){
  cart.splice(0,cart.length)
  console.log(`Your total cost is $${new_total}, which will be charged to the card ${cardNumber}.`)
}
  else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  
}
