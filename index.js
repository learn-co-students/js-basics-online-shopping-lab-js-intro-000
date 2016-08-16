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
	var price = Math.floor(Math.random(0, 100));
	//adding item & price to cart as object
	cart.push({item: price});
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
			for(var i = 0; i < cart.length; i++){
				var array=[]
				for(var key in cart[i]){
						//define string with item and price in them
						var array = [cart[i], cart[i][key]];
					}
					console.log("In your cart you have "+ array + ".");
			}
		}
}
function removeFromCart(item){
	//if item not in cart, then print out 'That item is not in your cart'

	//if item in cart, remove item from cart array
	
	//then return cart
	return cart;
	//HINT: Check each object's key to see if it matches the parameter, 
	//then remove it if it matches. You might find hasOwnProperty to be useful.) 
}

function placeOrder(cardNumber){
	if (cardNumber === null || cardNumber === undefined){
		console.log("We don\'t have your credit card on file for you to place your order.")
	}
	else{
		console.log('Your total cost is $${total()}, which will be charged on the card ${cardNumber}.')
	}
	//if no arg received, print out 'We don't have your credit card on file for you to place your order.'
	//if cc on file, then print out "Your total cost is $${total()}, which will be charged to the card ${cardNumber}."
}

