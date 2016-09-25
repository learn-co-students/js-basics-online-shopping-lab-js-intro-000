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

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getCart(){
  return cart;
}

function viewCart(){
  if(cart.length != 0){
    var text = "In your cart, you have ";
    for(let i = 0; i< cart.length; i++){
        let itemInfo = cart[i]
        let item = Object.keys(itemInfo)[0]
        let price = itemInfo[item]
        text += `${item} at $${price}, `;

    }
    text = text.slice(0, -2);
    text += ".";
    console.log(text);
  }else{
    console.log("Your shopping cart is empty.")
  }
}

function placeOrder(number){
  if (number != undefined){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    setCart([])
  }else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart = cart.slice(0, i).concat(cart.slice(i+1));
      return cart;
    }
  }
    console.log("That item is not in your cart.")
    return cart;
}
