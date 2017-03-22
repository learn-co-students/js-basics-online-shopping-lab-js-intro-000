# Time complexity

### Objectives
+ Calculate the  time it takes a function for a given input
+ Calculate the time it takes a function for a inputs of different lengths


## Our first algorithm

One common question we must answer as developers, is inclusion.  Consider the following questions.

* Is the letter "a" in a given word "banana"

First, note that we can simply answer these questions with the existing Javascript method `includes`.

```javascript
"banana".includes("a")
  // true  
```

But how does Javascript implement something like this?  For right now, let's assume that Javascript implements it the same way we would, by examining each letter.  

Great, so now let's consider the cost of algorithm that examines each letter. 

### The cost of examining each letter

When we ask about 'cost' in the context of algorithms, what we mean for now is time.  

Here, we want to calculate the time it takes to consider each letter and test for equality.  First let's write out the code, and then we'll calculate the cost.  Our code may look like the following:

```javascript
  function stringIncludes(word, letter){
    let matches;
    for(let i = 0; i < word.length; i++){
      if(word[i] === letter){
        matches = true
      }
    }
    return !!matches
  }

  stringIncludes("banana", "a")
  // true
  stringIncludes(fruit, "d")
  // false
```

In the code above, we visit each letter in the string, and then we ask the question, does it equal our letter.  If there is no matching element, the `matches` variable will equal `undefined`, to coerce that into a boolean value we use the `!!` operator.  

  > What is the !! operator?
  
> The !! (double bang) operator coerces an expression into its boolean value. Think of !! as follows.  If you want to change false into true, you would write `!false`.  Now if you want to coerce a falsy value like undefined into true, you would write  
`
!undefined
// true
`

> But our real goal is to return true when the expression is truthy and false when the expression is falsy.  Currently, an expression like `!undefined` returns true when the expression is falsy.  So let's add another ! operator to have it match:
`
!!undefined
// false
`

> Thus, we coerce an expression to it's boolean value.

Now how long does that entire procedure take?

```javascript
function stringIncludes(word, letter){
  let matches; // 1
  for(let i = 0; i < word.length; i++){ //2
    if(word[i] === letter){ //3
      matches = true //4
    }
  }
  return !!matches // 5
}

stringIncludes("banana", "d")
```

So first, when we ask how long a procedure takes, a shorthand is to ask how many lines of code are involved.  In the above code, not including those closing brackets, it looks like the answer is five.  But intuition tells us there's more work involved than that.

Let's take a closer look by using our function to determine if the letter "d" is in the string "banana".  

```javascript
function stringIncludes(word, letter){
  let matches; // 1
  for(let i = 0; i < fruit.length; i++){ //2
    if(word[i] === letter){ // + 6
      matches = true //
    }
  }
  return !!matches // 9
}

stringIncludes("banana", "d")
```

In the first line, we declare the variable `let matches;` Then, for each letter we ask if it equals "d".  So we run the if expression six times (one for each letter).  Finally, we coerce the variable matches to it's boolean value, and return that value.  So we would probably say there are nine steps involved.

Notice that how long it takes to guarantee that a letter is not in a word depends on the size of our word.  So let's express the time it takes to run this function in terms of the size of our string.  

If let the number of letters in our word be `n` then we can say our function runs in `n + 3` time.  So if we choose a string of 100 letters, this takes 100 + 3 = 103 time.  We call this the time complexity of the function.

![time-complexity](/Users/flatironschool/Desktop/time-complexity.png)

As we see in the first sentence of the Google definition, time complexity is expressed in terms of the length of the input.  The second sentence about big O, coefficients, and lower order terms we'll talk about in the sections to come.

But first!

### A lingering problem

Doesn't the time complexity also depend on whether there is a match, and where that match occurs?  For example, if we give our function the arguments

`stringIncludes("banana", "b")`

we no longer have to visit each letter, and now our function should take less time to run, right?  Let's consider that in the next section with a discussion of best case, worse case, and average case scenarios for an algorithm.  For now, let's appreciate what we learned so far.

### Summary

In this section, we worked towards a mechanism for describing how costly a function is.  We calculate the cost by counting the number of lines that are run in a function.  We recognize that the cost of performing a function varies with the size of the input, so we describe the cost in terms of the size of the input.  We call this cost the time complexity of the function.
