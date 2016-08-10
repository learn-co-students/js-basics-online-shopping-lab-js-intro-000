var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var product = {[item]: price};
  cart.push(product);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length>0){
    var list="In your cart, you have"
    for(let i=0; i<cart.length; i++){
      for(var item in cart[i]){
        list += (` ${item} at $${cart[i][item]}`);
      }
      if(i<cart.length-1){
        list += ",";
      } else { list += "."}
    }
    console.log(list);
  }  else {console.log("Your shopping cart is empty.")}
}


function removeFromCart(item){
  var removed = 0;
  for(let i=0; i<cart.length; i++){
    for(item in cart[i]){
      if(cart[i].hasOwnProperty(item)){
        cart.splice(i,1);
        removed ++;
      }
    }
  }
  if(removed===0){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(number){

  if(number >0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    cart = [];
  }
  else { console.log("We don't have a credit card on file for you to place your order.");}
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
