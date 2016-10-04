var cart;

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
   var price=Math.floor(Math.random()*100);
   var obj={[item]:price}
   cart.push(obj);
   console.log(`${item} has been added to your cart.`)
   return cart;
}

function viewCart(){
    var retMessage="In your cart, you have "
    if(cart.length>0){
      for(var i=0; i<cart.length;i++){
      for(var items in cart[i]){
      retMessage=retMessage+ `${items} at $${cart[i][items]}${i===cart.length-1?'.':', '}`
    }
  }
    }else{
      retMessage= "Your shopping cart is empty."
    }

    console.log(retMessage);
    return retMessage;

}
function removeFromCart(item){
   var found=false;
   for(var i=0;i<cart.length;i++){
     for(var items in cart[i])
      {
        if(cart[i].hasOwnProperty(item)){
         cart.splice(i,1);
         //setCart(newCart);
         found=true;
       }
      }
   }
   if(found===false){
      console.log("That item is not in your cart.");
   }

}

function placeOrder(creditCard){
  if(!creditCard)
  { console.log("We don\'t have a credit card on file for you to place your order.");
}else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
  setCart([]);
}
}
