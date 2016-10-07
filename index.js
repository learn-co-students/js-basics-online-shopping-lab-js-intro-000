var cart ;



function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  var allPrice = cart.item + cart.socks + cart.puppy + cart.iPhone ;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
    return t + allPrice
}

function getCart() { return cart

}
function addToCart(item){
  var itemPrice =  Math.random()
  var finalPrice = Math.floor(itemPrice)
  var itemNPrice = {'item':'finalPrice'}
  cart.push(itemNPrice)
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var s = {socks: 'Math.random' }
  var p = {puppy :'Math.random'}
  var i = {iPhone :'Math.random'}
  cart.push(s)
  cart.push(p)
  cart.push(i)

for ( var i = 0 ; i < cart.length ; i++ ){
console.log (`In your cart, you have socks at $${cart.socks}, puppy at $${cart.puppy}, iPhone at $${cart.iPhone}.`)

} console.log ('Your shopping cart is empty.')
}
