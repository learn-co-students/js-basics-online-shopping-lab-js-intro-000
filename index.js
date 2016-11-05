var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price= Math.floor((Math.random()* 100) + 0);
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

var itemPrices = Object.keys(cart)

function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  } else{
    for(var i=0; i<cart.length; i++){
      console.log(`In your cart you have ${item[i]} for ${item[itemPrices[i]]}.`);
    }
  }
}

function removeFromCart(){

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
