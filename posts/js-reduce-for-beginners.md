---
title: JavaScript .reduce() Array Method for Beginners
description: "Simple walkthrough on how to use .reduce()"
---

# JavaScript .reduce() Array Method for Beginners

Suppose I gave you an array of numbers, and asked you to find the total of the numbers, what would you do?
​
You might write something like this:
```javascript
const nums = [2, 5, 3];
​
let total = 0;
​
for (const num of nums) {
  total += num;
}
​
console.log(total); // <- 10!
```

This is perfectly valid code: you declared a sum variable, you looped through the array, and mutated (a fancy word for changed) the sum to be the value in sum plus the current number in the array. Great.
​
But you can do better.
​
Do it your own self, with your own clever brain, then tell me the answer.

### Okay. Here you go.
```
2 + 5 + 3 = ?
```
- First, you read the leftmost number, which is 2.
​
- Then, you look to the next number to its right, and you see 5. You work out their sum, and your clever brain remembers that value (7).
​
- You read on and see 3, again you work out the sum of this and the value that you remember in your brain (7). Your clever brain now remembers 10.
​
- Finally, you enthusiastically shout out the answer 10!

Well done.

You have looped through the numbers, and performed addition with the value you remember in your brain.

You have done a loop with a memory...

... just like what the reduce method would do.

How?


### Here is what you have done written in code:
```javascript
const nums = [2, 5, 7];
​
let sum = nums.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
        }, 0);
​
console.log(sum); //<- 10 again!
```
​
Let's break that down.
​
The reduce method first takes a mandatory callback function, which is the **reducer** function.
```javascript
let sum = nums.reduce(
​
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    },
    //Our REDUCER function 👆   
    
    0);
```
​
A **reducer** function takes two arguments, the first being the **accumulator**, which remembers the last value returned from the function itself. This is analogous to your clever brain that remembers the last value returned from the operation you've done. 
​
The second argument is the **current value** in the loop, like each one of the numbers you were looking at.
​
The function can perform some logic, and whatever it returns, is then remembered in the accumulator.
​​
```javascript
let sum = nums.reduce(
​
    //👇brain     //👇number it's looking at
    (accumulator, currentValue) => {
        return accumulator + currentValue;
        // 👆 The value returned is next stored in the brain
    },
​    0
    );
```
​
The second argument, which is optional, is the **initial value** its accumulator should remember.
```javascript
let sum = nums.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    },  
    0 //👈The initial value we remember
    );
```
​
The **reduce** method, loops through each number, performs the reducer function on each value, and returns the last thing that the accumulator remembers, in which we can assign to a variable.
​
It reduced an array of numbers, into one number.
```javascript
[2, 5, 3] -reduced-into-> 10
```
​
Again, here are the steps through each loop:

| loop n. | accumulator| currentValue | operation |
|---|----------------|-----------------|---------------------|
| 1 |  0 |  2 | 0+2 = 2  |
| 2 |  2 |  5 | 2+5 = 7  |
| 3 |  7 |  3 | 7+3 = 10 |
                    
Finally, there are no more values to loop through, so the value in the brain (now 10) is outputted and stored in the sum variable.

​
Now this is the most succinct version of our solution, achieved with an implicit return and using shorthands for the parameters:
​
```javascript
const nums = [2, 5, 7];
​
let sum = nums.reduce((acc, cur) => acc + cur, 0);
​
console.log(sum);
```
Well done, you have now mastered the very basics of the reduce array method. 
​
Be proud of yourself.

*To explore further, try reducing an array into different data types (such as a string, array, or an object).*

Resources:
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [James Q Quick's Practice Repo](https://github.com/jamesqquick/javascript-array-functions-practice)
- [Array Reduce in 100 seconds](https://www.youtube.com/watch?)