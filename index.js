var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var ans = {[item]: Math.floor((Math.random() * 100) + 1)};
  cart.push(ans);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(!cart.length){
    console.log("Your shopping cart is empty.");
    return "Your shopping cart is empty.";
  }
  var i;
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
  var total = 0;
  for(var i in cart){
    for(var j in cart[i]){
      total += cart[i][j];
    }
  }
  return total;
}

function removeFromCart(item) {
  for(var i = 0; i<cart.length; i++){
    for(var j in cart[i]){
      if(cart[i].hasOwnProperty(item)){
        if(j === item){
          cart.splice(i, 1);
          return cart;
        }
      }
    }
  }
  console.log("That item is not in your cart.");
  return cart;
  //надо делать через операции с массивом типа slice, splice чтобы удалить элемент из массива
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
