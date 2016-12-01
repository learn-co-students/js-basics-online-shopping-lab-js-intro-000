var cart;
function setCart(newCart) {
  cart = newCart;
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}
function getCart(){///create a function and call it getCart. Without an agrument
return cart///create the cart
}
function addToCart(item){///create a function and gave it an agrument (item)
  var price/// created a variable and called it price but didnt give it a value
  price=Math.floor((Math.random()*100))/// the variable equals to a number with is created using Math.random(0-.99)and math floor rounds of the number
 cart.push({[item]:price})///we use the push function to add the var price (number that was created) into the cart object array

  console.log (item + " has been added to your cart.")/// prints the item
  return cart/// and returns the cart array
}
function viewCart(){/// created a function without a value
    var itemPrice /// created a variable without a value
    var x="In your cart, you have"/// created a variable and gave it a value to equal "In your cart, you have"
    if(cart.length===0){///used a if function to test the cart array. If cart array is empty
      console.log("Your shopping cart is empty.")/// the function will print the console.log
    }///closed the condition
    else {/// created a else functiona and opened the brackets for the function
        for(var i=0; i<cart.length;i++){/// created a for loop function(start,when to end,how to continue)
        itemPrice=Object.keys(cart[i])///variable equals to object keys in cart array with var index [i]
if(i<cart.length-1){/// if i which is 0 is smaller than cart array length -1(the -1 means that it takes the last length and -1 to give the last index number)
    x=x + " " + itemPrice[0] + " at $" + cart[i][itemPrice[0]] + ","///x equals to var x + object keys index[0]+ $ + object keys value at index[0]+,
  }
    else{/// using the else function to say that if the if function is not true, it will print the below with the period at the end
      x=x + " " + itemPrice[0]  + " at $" + cart[i][itemPrice[0]] + "."
  }
}
console.log(x)///console.log will print var x
}
}
function removeFromCart(nameOfItem){/// create a function and give the parameter an agrument
  var i = cart.length/// created a variable(since we dont know the name of the item we are checking, i gave it a value i) which is the same as the array(cart's length)
while(i--)///while function will keep decrement(--)i value
  if (i===cart.length){/// if function will check that if the value of i is equal to the array(cart.length) and if true
}   console.log ("That item is not in your cart.")///will print console.log
cart.splice(cart.indexOf[i],1)/// splice removes an item from the cart array which we dont know the index of using var [i] and 1 means it will remove 1 item from that location
return cart/// after its removed, we return the cart with the item removed
}
function placeOrder(cardNumber){
if (arguments.length===0){
  console.log ("We don't have a credit card on file for you to place your order.")
}
}
