var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var itemObject = {
      itemName:`${item}`,
      itemPrice: Math.floor(Math.random()*100)
    }
      cart.push(itemObject)
        return itemObject["itemName"] + " has been added to your cart."
}


function viewCart() {
  if (cart.length===0){
      return "Your shopping cart is empty."
      
  } else if (cart.length === 1) {
      var itemObject = cart[0]
      return `In your cart, you have ${itemObject.itemName} at $${itemObject.itemPrice}.`
        
  } else if (cart.length === 2) {
      var string = "In your cart, you have " 
        for (var i = 0; i < cart.length; i++){
          if (i === 0){
             string += `${cart[i].itemName} at $${cart[i].itemPrice}, and `
           } else {
                string += `${cart[i].itemName} at $${cart[i].itemPrice}.`
           }
        }                  
        return string
  }
        
   else if (cart.length >= 3) {
        string = "In your cart, you have "
         for (i = 0; i < cart.length; i++){
            if (i < 2){
              string+= `${cart[i].itemName} at $${cart[i].itemPrice}, ` 
            }   else {
               string+= `and ${cart[i].itemName} at $${cart[i].itemPrice}.`                  
            } 
         }
   return string
   }
   
}


function total() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  if (cardNumber){
    let totalCost = total();
    cart =[];
    return`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
