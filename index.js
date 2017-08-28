var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);
cart.push({[item]: price});
console.log(`${item} has been added to your cart.`);
return cart;
}


function viewCart() {
  let cartdes = 'In your cart, you have ';
  if (cart.length === 0){
    console.log('Your shopping cart is empty.');
  }else{
      let cartitems = [];
      for (let i = 0; i<cart.length; i++){
        cartitems.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
      }
      for (let i = 0; i < cartitems.length; i++){
        if (i === cartitems.length-1){
          cartdes += cartitems[i]
        }else if (i === cartitems.length-2 && cartitems.length > 2){
          cartdes += cartitems[i] + ', and ';
        }else if (i === cartitems.length-2){
          cartdes += cartitems[i] + ' and ';
        }else{
          cartdes += cartitems[i] + ', ';
        }
      }
      console.log(cartdes + ".")
    }
}

function total() {
  total = 0
  for (let i =0; i < cart.length; i ++){
    total += parseInt(Object.values(cart[i]))
  }
  return total
}

function removeFromCart(item) {
  for (let i = 0; i< cart.length; i++){
    if (Object.keys(cart[i])[0] === item){
      cart.splice(i, 1)
    }
  }
  console.log('That item is not in your cart.')

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }else{
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
