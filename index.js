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
  //console.warn("Total is " + t + ".");
  return t
}

function getCart (){
  return cart
}

function addToCart(item) {
  var price = Math.random()
  price *=  100
  price = Math.floor(price)
  //console.warn("After mult: " + price)
  console.log(`${item} has been added to your cart.`)
  //console.warn(`${item} has been added to your cart at \$${price}.`)
  cart.push({[item]: price})
  return cart
}

function viewCart(){
  if (cart.length==0){
      console.log("Your shopping cart is empty.")
  } else{
    var itemtext=[];
    for (var i = 0, l = cart.length; i < l; i++) {
      //console.warn(`hmm cart[i] is ${Object.keys(cart[i])}`)
      for (var key in cart[i]) {
        itemtext[i]=`${key} at \$${cart[i][key]}`
        //console.warn(itemtext[i])
      }
    }
    console.log(`In your cart, you have ${itemtext.join(", ")}.`)
    //console.warn(`In your cart, you have ${itemtext.join(", ")}.`)
  }
}

function removeFromCart(item){

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var cartitem in cart[i]) {
      if (cartitem == item){
      //if (cartitem.hasOwnProperty(cartitem)){
        console.warn("about to slice out of cart")
        cart = cart.slice(0,i).concat(cart.slice(i+1));
        //      cart = cart.slice(0, i).concat(cart.slice(i + 1))
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder (number){
  if (number === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    //cart.length = 0
    cart = []

  }
  return
}
