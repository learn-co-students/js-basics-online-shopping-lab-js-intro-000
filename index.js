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
return cart
}
function addToCart(item){
  var price

  price=Math.floor((Math.random()*100))
 cart.push({[item]:[price]})

  console.log (item + " has been added to your cart.")
  return cart
}
function viewCart(){
  //variable
  var itemPrice
    var x="In your cart, you have"
    if(cart.length===0){
      console.log("Your shopping cart is empty.")

    }

    else {
      for(var i=0; i<cart.length;i++){
        itemPrice=Object.keys(cart[i])
if(i<cart.length-1){
    x=x + " " + itemPrice[0] + " at $" + cart[i][itemPrice[0]] + ","
  }
    else{
      x=x + " " + itemPrice[0]  + " at $" + cart[i][itemPrice[0]] + "."
  }
}
console.log(x)
}
}
