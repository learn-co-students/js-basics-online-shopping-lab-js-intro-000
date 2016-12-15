var cart = [{ pizza: 63 }];

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart(){
  let x = "In your cart, you have";
  if(cart.length == 0){
      console.log("Your shopping cart is empty.")
    }
  else{
    for(let i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i])[0]
      var price = cart[i][item]
      x = x + " " + item + " at $" + price + ",";
    }
  }
  x = x.slice(0, -1);
  x = x+"."
  console.log(x);
}


function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  for (let i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    t = t + price;
  }
  return t
}

function removeFromCart(item){
  console.log(cart.item);
  if(cart.hasOwnProperty(item)==false){
    return "That item is not in your cart.";
  }
  else{
    console.log(delete cart.item);
    delete cart.item;
  }
}
removeFromCart();
