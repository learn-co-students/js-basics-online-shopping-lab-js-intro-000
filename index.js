

function setCart(newCart) {
  cart = newCart;
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

function getCart() {return cart}
var cart=[]
function addToCart(item) {
                          cart.item=Math.random()*100;
                          console.log(`${item} has been added to your cart.`);

                          return cart}
var item=Object.keys(cart)
function viewCart() {if (cart.length<1) {console.log (`Your shopping cart is empty.`)}
                      else
                        {for (var item in cart) {console.log(`In your cart, you have ${item} and ${cart[item]} pairs.)}}}
