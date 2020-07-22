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
 var price = Math.floor(Math.random()*100+1);
 var sent = {itemName: item, itemPrice: price}
 cart.push(sent);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here

  if(!cart.length/*checks if cart is zero*/){
      return "Your shopping cart is empty.";
    }
    var ans = "In your cart, you have ";
    for(i=0; i<cart.length; i++){
      for(var j in cart[i]){
        if(i === 0){
          ans += `${j} at $${cart[i][j]}`;
          continue;
        }
        if(i === cart.length - 1){
          if(cart.length > 2){
            ans += ',';
          }
          ans += ` and ${j} at $${cart[i][j]}`;
          continue;
        }
        ans += `, ${j} at $${cart[i][j]}`;
      }
    }
    ans += ".";
    console.log(ans);
    return ans;
  }


function total() {
  // write your code here
  var sum = cart.itemPrice
  var hex = 0
  for (var i=0; i<cart; i++){
    hex = hex + cart.itemPrice[i];
    return hex
  }
}

function removeFromCart(item) {
  // write your code here

}

function placeOrder(cardNumber) {
  // write your code here
}
