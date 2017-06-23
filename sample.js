function viewCart(){
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i =0; i < cart.length; i++) {
      var itemObject = cart[i]
      var name = Object.keys(itemObject)[0];
      var cost = itemObject[name];
      if(i=== cart.length-1) {
        arr.push(` and ${name} at $${cost}`)
      }
      arr.push(`${name} at $${cost}`)

    }
  }
  console.log(`In your blah)
}
