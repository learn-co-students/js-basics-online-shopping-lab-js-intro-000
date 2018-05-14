/*The `addToCart()` function accepts one argument, the name of an item.
    + Use that passed-in string to create a new object representing the item. The object should consist of one key-value pair in which the key is the item's name and the value is a randomly-generated price: `{ itemName: itemPrice }`. As more items are added, the `cart` should start to look something like this: `[ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }]`.
    + The price of each item should be a randomly-generated integer between 1 and 100.
      * ***HINT***: Look into `Math.random()` and `Math.floor()`.
    + If you're struggling to create a new object from the item name, remember that ES6 provides a nifty way to dynamically set the keys in an object literal. That is, it allows the use of variables as keys. If you're having trouble recalling the syntax, take a look back at the **Top Tip** in the [JavaScript Objects](https://learn.co/lessons/javascript-objects) lesson.
    + Upon the successful addition of a new item to the cart, the function should print `<itemName> has been added to your cart.` to the console and then `return` the updated `cart`. */

var cart =[];

function addToCart(item){
  var newObject= {};
    newObject[item]=Math.floor(Math.random()*100);

 cart.push(newObject)
  console.log(`${item} has been added to your cart.`);
  return cart;

}

addToCart("bananas");
addToCart("egg");
addToCart("strawberries");


/* The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, printing out the contents as one long, coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead print out `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above. The printed statement should be a single sentence that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17 and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.` */

function viewCart() {
  var sentence_starter = "In your cart, you have";
  var cart_list = [];

 cart.forEach(function(item) {
    for(var key in item){
        cart_list.push(`${key} at $${item[key]}`)
    }
 });
       if(cart_list.length===0){
         console.log("Your shopping cart is empty.")
       }
      else if(cart_list.length == 1){
      console.log(`${sentence_starter} ${cart_list}.`);
       }
       else if(cart_list.length ==2){
         console.log(`${sentence_starter} ${cart_list[0]} and ${cart_list[1]}.`);
       }
       else if(cart_list.length>=3){
         cart_list[cart_list.length-1]= "and "+cart_list[cart_list.length-1];
         console.log(`${sentence_starter} ${cart_list.join(", ")}.`);
       }

}




function total() {
  var total = 0;
  cart.forEach(function(item){
    for(var key in item){
      total+=item[key];
    }
  });
  return total;
}


/* The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
    + If the cart does not contain a matching item, the function should print out `That item is not in your cart.` and return the unchanged cart.
    + If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
    + ***HINT***: Check each object's key (the name of the item) to see if it matches the parameter, then remove it if it matches. You might find [hasOwnProperty] */
function removeFromCart(item) {
   var foodChecker= false;
  for(var i = 0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
        foodChecker=true;
        cart.splice(i,1);

 }
}

   if(!foodChecker){
    console.log("That item is not in your cart.");
  }


  return cart;
}




    console.log(removeFromCart("eg"));

function placeOrder(cardNumber) {
  if(arguments.length===0){
    console.log("Sorry , we don't have a credit card on file for you.");
  }
  else if(arguments.length ==1){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`);
    cart = [];
  }
}
