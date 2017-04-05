var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var price=Math.floor(Math.random()*100)+1;
 //here. the line above looks fine, but the line below does not
 //Do you want me to stay with you while you fix it?
 //cart should be an array of Objects
 //cart.push(`${item}:${price}`);
 cart.push({[item]:price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  }else{
    var listPairs=[];

    for(let i=0; i<cart.length; i++){
      let itemPrice=cart[i];
      //let item=Object.keys(itemPrice);
      for(let item in itemPrice){
        let price=itemPrice[item];
        listPairs.push(`${item} at $${price}`);
      }
    }
    console.log(`In your cart, you have ${listPairs.join(', ')}.`)
    // .join() : join the elements of an array into a string.
  }
};
/* //THIS WORKS TOO:
    for(let i=0; i<cart.length; i++){
      let itemPrice=cart[i];
      let item=Object.keys(itemPrice);
      let price=itemPrice[item];

      listPairs.push(`${item} at $${price}`);
    }
    console.log(`In your cart, you have ${listPairs.join(', ')}.`)
    // .join() : join the elements of an array into a string.
  }
};
*/

function total() {
  // write your code here
  var totalCost=0;
  for(let i=0; i<cart.length; i++){
    var itemPrice=cart[i];
    for(let item in itemPrice){
      totalCost+=itemPrice[item];
    }
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
    for(let i=0; i<cart.length; i++){
      let itemS=cart[i];
      if (itemS.hasOwnProperty(item)===true) {
        cart=cart.slice(0,i).concat(cart.slice(i+1))
      }
    }
  console.log("That item is not in your cart.");
  return cart;
};

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber===undefined){
    console.log(`We don't have a credit card on file for you to place your order.`)
  }else{
    //en vez de abajo, tambien: cart=[]; return cart;
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);
  }
};
