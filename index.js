var cart=[];

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart
}
function total() {
  let t = 0

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item){
  var price=Math.floor(Math.random()*101)
  var tmp={item:price}
  cart.push(tmp)
  console.log(item +' has been added to your cart.')
  return cart
}
function viewCart(){
  if(cart.length===0)
    console.log('Your shopping cart is empty.')
    else{
      var items=''
      for(let i=0; i<cart.length;i++){
        for (let item in cart[i]) {
          let price =cart[i][item]
          items+= i===0?'':', '+item+ ' at '+price
        }
      }
      console.log('In your cart, you have '+items+'.')
    }

    return cart
}

function removeFromCart(item){
  var pos;
  for(let i=0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item))
      pos =i
  }
  if(pos!== undefined)
    cart.splice(pos,1)
  else {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(creditCardNum){
  if(creditCardNum === undefined)
    console.log('"We don\'t have a credit card on file for you to place your order.')
  else {
    console.log('Your total cost is $'+total()+', which will be charged to the card '+creditCardNum+'.')
    cart =[]
  }
  return cart
}
