var cart = []; // initialize global variable: an empty array that we will fill

function setCart(newCart) {
	cart = newCart; // sets cart [ ] to value of argument (newCart)  
};

function total() {
	let sum = 0; // sets sum to 0. Sum will grow as we add items

	for (var i = 0, l = cart.length; i < l; i++) { // loops through array
		for (var key in cart[i]) { // loops through object 
			sum += cart[i][key]; // *Tricky... cart.key at index[i] 
		}
	}
	return sum;
}

function getCart(){
	return cart;
}

function addToCart(item){
		var price = Math.floor(Math.random()*101)
		cart.push(new Object({[item]:price}))
		console.log(`${item} has been added to your cart.`)
		return cart;
		}

    function viewCart (){
  	if(cart.length === 0){
  		
  		console.log(`Your shopping cart is empty.`)
  		
  		} else {
  			
  			var myString = "In your cart, you have "
  			
  			for(var i = 0, l = cart.length; i < l; i++){
  				
  				for(var list in cart[i]){
  					myString+=`${list} at $${cart[i][list]}`
  					
  					if(i!==cart.length-1){
  						myString+=", "
  						
  						} else {
  							myString+="."
  							}
  				}
  			}
  			console.log(myString)
  		}
  }

  function removeFromCart(item){

	for(var i = 0, l = cart.length; i < l; i++){  // sets loop condition

	for(var list in cart[i]){
			if(item === list){ // is item in cart {} ? Checks each object's key to see if it matches the parameter.
				cart.splice(i,1) // if yes, removes the object from the cart via splice
				return cart;
			 }
		}
	}

	console.log("That item is not in your cart.") // prints this if item not in cart
	return cart;
}

function placeOrder(cardNumber) { // accepts one argument, a credit card number

	if (cardNumber === undefined){ // If no argument is received, prints out... 
		console.log("We don't have a credit card on file for you to place your order.")
	}
	else{

		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
		cart = []; // empties cart array when purhcase completed
		return cart;
	}

	}
  