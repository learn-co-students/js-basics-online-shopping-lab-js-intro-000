var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // function for randomly generating item price
 // adds item name and item price as 2 key and value pairs to array
 // confirms that the item has been added to the cart
 
  function priceGenerator() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}

var item =  { itemName: itemName,
             itemPrice: priceGenerator()
           };
           
cart.push(item);
           

return `${itemName} has been added to your cart.`; 

}



// Loops over every item in shopping cart, returning contents
// as one long, coherent statement. 
function viewCart() {
  
  // Checks to see that shopping
  // is empty. if so, returns string confirming 
  // this.
  
  if (!cart.length) {
    
    return "Your shopping cart is empty.";
  }
  
  // Creates empty array to fill with shopping
  // cart items. 
  // Loop that goes through every item in cart array
  // and adds it to shoppingCart array with proper 
  // formatting.
  
  var shoppingCart = [];
  
  for (let i= 0, l = cart.length; i < l; i++) {
    
    shoppingCart.push(` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`);
    
  }
  
  
  // Checks to see if ShoppinG Cart has only one item, if so, returns below string.
  // If shopping cart has more than one item it moves
  // on below to else conditional. 
  // Uses pop method on shoppingCart array to remove
  // last array entry and assigns it to variable 'pop'.
  // Uses spread operator to update shoppingCart array to include ('and' + pop variable) as the array's last entry.
  // Returns single string notifying customer of every item
  // in shopping cart.
  
  if (shoppingCart.length == 1) {
    
  return `In your cart, you have${shoppingCart[0]}.`;
    
    
  } else {
  
  var pop = shoppingCart.pop();
  
  shoppingCart = [...shoppingCart, ` and${pop}`];
  return `In your cart, you have${shoppingCart.join()}.`
  
  
}

}

// Accepts no arguments, iterates through the cart array and 
// returns the current total value of the items in the cart.
function total() {
  // Declares variable "total" and sets it to 0.
  // Iterates through cart array adding item prices to "total" 
  // variable. 
  // returns the total value of the items in the cart 
  
  var total = 0;
  
  for (let i = 0, l = length; i < cart.length; i++) {
  
   total = total + cart[i].itemPrice;
  
}

return total;



}



 

// returns the name of item passed to function; removes item    
// from cart; returns updated cart.
function removeFromCart(item) {
  // initializes loop for searching through cart array checking
  // to see if item is in cart.
  // defines variable "c" to hold cart items at specific indexes
  
   
  
  for (let i = 0, l = cart.length; i < l; i++) {
     
    if (cart[i]["itemName"] == item) {
      
      cart.splice(i,1);
      return cart;
      
    }
  }
  
  return "That item is not in your cart."
    
}
    
    
    
  
  


// Returns a string containing your total cost of items in your
//cart along with the credit number you used to purchase said
//items.
function placeOrder(cardNumber) {
  // Checks to see if there is a cardNumber passed to function.
  // Defines 'cartTotal' variable and assigns to it the total
  // function.
  // Empties cart array.
  // Lets customer know their total costs along with their credit
  // card number.
  
  if (cardNumber === undefined) {
    
    return "Sorry, we don't have a credit card on file for you.";
    
  } else {
  
  var cartTotal = total();
  cart.length = 0;
  
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  
  }
  
}
