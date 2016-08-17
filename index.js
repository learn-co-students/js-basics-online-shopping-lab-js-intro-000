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
		 		if (cart.length === 0){
		 			console.log(`That item is not in your cart.`);
		 		}
		 		else{
			 		for (var i = 0; i < cart.length; i++){ //intialize counter through items
			 			var currentItem = cart[i];
			 			if (currentItem.hasOwnProperty(item) === true){ //if the items have item in it
					 			cart.splice(i,1);  //delete item at i index in cart array
							}
						else{
							console.log(`That item is not in your cart.`);
						}
			 		}
			 	}
			 	return cart;

}

function placeOrder(cardNumber){
	//if no cardNumber received or a cardNumber is not a number
	if (isNaN(cardNumber) === true){
		//print out this statement
		console.log("We don\'t have a credit card on file for you to place your order.");
	}
	else{ //if there is a cardNumber
		//print the following statement
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
		//empty cart with loop below
		for (var i = 0; i <= cart.length;i++){
			var currentItem = cart[i]; //current item defined
			cart.splice(i); //current item deleted from array
		}	
	}
}
