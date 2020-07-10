var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var addToCart= name =>{
  var obj={itemName: name,
           itemPrice: Math.floor(Math.random()*100)
  }
  cart.push(obj)
  return `${name} has been added to your cart.`
}

var viewCart= () =>{
  if(cart.length===0){
    return `Your shopping cart is empty.`
  }
  else{
    var str="In your cart, you have "
    for(let i=0; i<cart.length; i+=1){
      if(i===(cart.length-1) && cart.length!=1){
        str+=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else{
        if(cart.length===1){
          str+=`${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
        else{
          str+=`${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
      }
    }
    return str;
  }
}

var total= () =>{
  var price=0
  for(let i=0; i<cart.length;i+=1){
    price+=cart[i].itemPrice
  }
  return price
}

var removeFromCart= name =>{
  var Verify=0
  for(let i=0; i<cart.length; i+=1){
    if(cart[i].itemName===name){
      cart.splice(i,1)
      Verify+=1
    }
  }
  if(Verify===0){
    return `That item is not in your cart.`
  }else{
    return cart
  }
}

var placeOrder= ccNumber =>{
  if(ccNumber===undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
    var price= total()
    cart=""
    return `Your total cost is $${price}, which will be charged to the card ${ccNumber}.`
  }
}
