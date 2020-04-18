var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj={itemName: item ,itemPrice:Math.floor(Math.random() * 100) + 1}
 cart.push(obj);
 return(`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  if(cart.length>0){
    var arr=[];
    for(let i=0;i<cart.length;i++){
    arr.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    if(arr.length > 1) {
       arr[arr.length-1]=` and${arr[arr.length-1]}`
     }
    return(`In your cart, you have${arr}.`)
    }
    else {
      return("Your shopping cart is empty.")
    }
  }

function total() {
  // write your code here
  var sum=0;
  for(let i=0;i<cart.length;i++){
  sum+=cart[i].itemPrice
  }
  return(sum);
}

function removeFromCart(item) {
  for(let i=0;i<cart.length;i++){
    if( item === cart[i].itemName){
      cart.splice(i,1);
      return(cart);
    }
  }
  return("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
      var sum=total();
    cart=[];
    return(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`)

        }
  else return(`Sorry, we don't have a credit card on file for you.`)

}
