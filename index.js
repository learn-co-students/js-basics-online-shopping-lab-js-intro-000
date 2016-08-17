 var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  var t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
function getCart(){
	return cart;
}
function addToCart(item){
	//randomly prices item
	var price = Math.floor(Math.random()*100);
	//adding item & price to cart as object
	cart.push({[item]: price});
	//item has been added
	console.log(item +" has been added to your cart.");
	//return cart
	return cart;
	
}

function viewCart(){
	var items = Object.keys(cart);
		if(cart.length === 0){
			console.log("Your shopping cart is empty.");
		}
		else{
			var array=[];
			for(var i = 0; i < cart.length; i++){
				var key = Object.keys(cart[i])[0];
				array.push(`${key} at \$${cart[i][key]}`);
			}
			console.log(`In your cart, you have ${array.join(", ")}.`);
		}
}
function removeFromCart(item){
	//if item not in cart, then print out 'That item is not in your cart'
	//get all items in cart

	var cart ={
		pizza: '63', //don't forget commas
	//adding more key-value pairs
		calamari: '75',
		mushrooms: '10',
		steak: '45'
	}
	var items = Object.keys(cart); 
		//if cart does not have item in it:
			if (cart.hasOwnProperty(item) === false){
				console.log(`That is not in your cart.`);
			}
			//if cart has item in it
		 	else if (cart.hasOwnProperty(item) === true){
				// console.log(`That ${item} is in your cart. It costs $${cart[item]}.`);
				// Need to find where item is in the object
				// convert item from string to key? 
				// find index of the item in items
				delete cart["item"];
				console.log(cart); //returned new array to how deleted item
			}
}

removeFromCart("pizza");
removeFromCart('iPhone');

/*function placeOrder(cardNumber){
	if (cardNumber === null || cardNumber === undefined){
		console.log("We don\'t have your credit card on file for you to place your order.")
	}
	else{
		console.log('Your total cost is $${total()}, which will be charged on the card ${cardNumber}.')
	}
	//if no arg received, print out 'We don't have your credit card on file for you to place your order.'
	//if cc on file, then print out "Your total cost is $${total()}, which will be charged to the card ${cardNumber}."
}
*/
