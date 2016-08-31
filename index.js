var cart = [];
console.log('test');
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

function getCart(){
  return cart;
}

function addToCart(item){
  let price = Math.floor(Math.random()*100);
  let addIt = {[item]:price};
  cart.push(addIt);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
    if (cart.length <= 0) { console.log("Your shopping cart is empty."); }
    else {
    let newCart = [];
    for (let i = 0; i < cart.length; i+=1) {
        let cartKey = Object.keys(cart[i])[0];
        //console.log(cartKey);
        newCart.push(cartKey + " at $" + cart[i][cartKey]);
        }
    console.log("In your cart, you have " + newCart + ".");
  //return newCart;
    }
}
