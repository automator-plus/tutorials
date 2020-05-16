# 3 Debugging the Adobe Premiere Pro API

## 1. Introduction

This tutorial assumes you've got VS Code installed as well as the VS Code Adobe ExtendScript Debugger. You can install VS Code <a href=''>here</a> and the ExtendScript Debugger <a href=''>here</a>. We've got a video and tutorial about it <a href=''>here</a> if you first want to check that out. If you're coming from the previous tutorial - God-speed captain!

In this tutorial we'll: 
+ Cover some basic JavaScript 
+ Create a JavaScript bug
+ Debug the bug
+ Chat about the VS Code Debugger
+ Hook it up with Premiere Pro as our host
+ Look at some of the Premiere Pro building blocks
+ Create a script that inserts markers at specified frame or seconds intervals

## 2. Debugging

<img src='./assets/debug.jpg' width='640px'>

### 2.1 What is a debugger

Let's start with the definition of a bug before we start debugging them. Below is a great extract I got from <a href='https://hackernoon.com/debugging-smart-contracts-with-truffle-debugger-a-practical-approach-f56bf0600736'>this</a> Hackernoon blog about debugging smart contracts on the blockchain. Super tangent, but the blockchain is also _just_ code that needs writing, executing, testing and most importantly *debugging*. Also, the blog gets the image credits 😉. If you want to know more about bugs on the blockchain and debugging them, give the blog a read. The blog goes on to chat about the right tools for the job, however, this is using a different IDE to debug the solidity Ethereum language. I just want to share the first paragraph: 

> Bugs! Bugs are aliens that creep into a programmer’s code at night when no one is watching and alter the state of working code. These aliens have only one mission — to frustrate the life of a programmer. How does a programmer kill a bug before he dies of frustration? Yeah, you got it right! By debugging and removing the buggy code. But why would a programmer go into a debugging war without the right tools? If a programmer is going to debug he better do it the right way, using the right tools.

If you've never written a line code in your life, here is a JavaScript example of a bug:

```javascript
var a = "2";
var b = 3;
var c = a + 3;
console.log(c);
>23
```

Do you see the bug? 

...

We expect `5`, `2+3` should be `5` _not_ `23`. 

Let's unpack what's happening here.

First, we're creating a variable called `a` and assign it the value `"2"`. The double quotes around the 2 indicate that the value should be read as text, also called a **string**. We can make strings using single _or_ double-quotes. Assigning a value to a variables means that we are storing the value of the variable in memory (RAM) somewhere. Luckily, you don't have to keep track of _where_ in RAM, the programming language usually does that for you. However, you need to be aware of what you're storing in RAM and what you're storing on disk. If your PC crashes, everything in RAM disappears, everything on disk stays. 

OK, quick IT lesson over, coming back to the above example, the line `var a = "2";` assigns the value of `"2"` to the variable `a`. We can verify this by print it out to what we call the console by running `console.log(a)`, i.e.

```javascript
var a = "2"
console.log(a)
>2
```

As expected, the value of `a` that is printed out is `2`. Maybe we want to make our printout a bit more clear by adding the text: "The value of the variable 'a' is `<INSEWRT VALUE HERE>`". To do this we can do what is called string concatenation in programming, a.k.a. putting strings together. We do this using the `+` operator and it works as you'd expect, `"hello" + "there"` = `"hellothere"`. Well, sort of. We'll come back to that, for now, we'll just do `"The value of 'a' is " + a`. 

```javascript
var a = "2"
console.log("The value of 'a' is " + a)
>The value of 'a' is 2
```

Cool, so we've concatenated the string `"The value of 'a' is "` and the variable `a` to get `The value of 'a' is 2`. Coming back to our bug... Our next line of code is:

```javascript
var b = 3;
```

Here we do a very similar, yet very different operation compared to `var a = "2"`. We're still assigning a value to a variable, in this case, called `b`. However, this time there are no double quotes, and that makes all the difference. Without the double quotes, JavaScript interprets the value of `3` as a number, not text. We can verify this by running the following JavaScript code:

```javascript
console.log(typeof(a))
>string
console.log(typeof(b))
>number
```

As you can see the type of `a` is `string` and the type of `b` is number. And this is where our bug creeps in due to a misunderstanding between how we think JavaScript will add `"2"+3`. We think that it will treat both variables as numbers and sum `2` and `3` to give `5`. However, the default JavaScript action when summing two variables, one of type string and one of type number is to convert the number to a string and then do normal string concatenation. 

Why this silly behaviour you might ask? Well, it's not really silly, a choice had to be made, either convert the number to a string or the string to a number or throw an error. However JavaScript, and by extent, Adobe's ExtendScript is a very lenient programming language. Because JavaScript is such a bastardised language that is used in so many different ways on the web, usually it doesn't throw errors, and even if it does it still continues on through your code, making numerous assumptions based on the rules laid out in the ECMA standards. 

Don't worry, we won't go into all of the JavaScript ECMA standards. That's the problem, nobody can. So you learn by failing, and bugs are inevitable because not only do we know all the unknowns about the language we are using, we definitely don't know all the unknowns about the programs we are writing. For example, we wouldn't expect that somebody would try and insert the entire Sharespear body of work into our Premiere Pro Adobe ExtendScript extension but doesn't mean that somebody won't try, and so bugs start to emerge. 

Right, a few chapters later and we've made peace with the fact that bugs are inevitable. So what can we do about their existence in our code? Well... We can put checks and balances in place to ensure that only what we expect is allowed to hit our code, otherwise, we tell the user what they did wrong and how they can fix it. 

But understand, this comes with time and many iterations of faulty code that breaks and doesn't. When coding, assume it's _not_ going to work, that's why you're there, to make it work - one way or the other. 

An example of such a check in our bug above would be to check if the types of `ab and `b` are correct before summing them, otherwise, tell the user what went wrong. For example,

```javascript
var a = "2";
var b = 3;

if ((typeof(a) === "number") && (typeof(b) === "number")) {
    var c = a + b;
    c = "The value of c is " + c;
} else {
    var c = "'a' and 'b' both need to be numbers";
}
console.log(c);
```

Here we add an `if` statement to check the types of `a` and `b`. We use the `&&` the say "and", in other words, the first _and_ second statement needs to hold true before we climb into the code defined between the first set of curly braces, `{}`. We then declare what should happen if our `if` condition isn't met, the `else` condition. In our case, we'll assign the text: "'a' and 'b' both need to be numbers" to the variable `c`. Why do this? It comes with time when programming, but you want to keep your code as clean as possible, so reusing the `c` variable name, allows us to only write `console.log(c)` _once_.  As opposed to:


```javascript
var a = "2";
var b = 3;

if ((typeof(a) === "number") && (typeof(b) === "number")) {
    var c = a + b;
    console.log("The value of c is " + c)
} else {
    console.log("'a' and 'b' both need to be numbers");
}
```

Subtle difference. However, cleaner code, is more maintainable code, is more sustainable code, is code with less _bugs_. To wrap up the JavaScript lesson, I'd like to _refactor_ the above code, however, to illustrate that variable names are your choice, and you should make good choices. Or try at least, variable names like `a`, `b` and `c` are not clear. You might think you know what your code is doing. But I can guarantee you, you will come back in 2 months and won't recognise your own code. Some better variable for our example is shown below, I also expand our else condition to tell the user exactly _which_ number is in the wrong format. 

```javascript
var value1 = "2";
var value2 = 3;

if ((typeof(value1) === "number") && (typeof(value2) === "number")) {
    var sumValue = value1 + value2;
    var result = "The value of c is " + sumValue;
} else {
    if(typeof(value1) !== "number"){
        var result = "The type of 'value1' needs to be a string, not " + typeof(value1);
    }else if(typeof(value2) !== "number"){
var result = "The type of 'value2' needs to be a string, not " + typeof(value2);
    }
}
console.log(result);
```

We've introduced a lot of JavaScript programming concepts above. We'll pause it here, but elaborate more in our <a href=''>next turorial</a>.

VS Code has all the standard debugging features you'd expect from an IDE, like breakpoint support, a variable inspector and being able to watch variables. If you've never heard these terms before, fret not, stick around, we unpack them later. As I was saying, VS Code has all the standard debugger features

for various language and by installing a debugger extension for each language allows you to debug all your applications using the same debugger. 

their extensions you can debug various languages using the same IDE. For more information on the VS Code Adobe ExtendScript debugger. VS Code's built-in debugger helps accelerate your edit, compile and debug loop.

We can't talk about debugging in VS Code without talking about the `./launch.json` file. 

### Breakpoints

### Variable inspector 

## 3. Premiere Pro building blocks

### 3.1. Objects in Programming

#### JSON

PPE on debugger for various PP Classes

#### Classes 

getters, setters

### 3.2. Premiere Pro Objects

#### App Object
#### Project Object
#### Project Item Object
#### Sequence Object
#### Track Object
#### Track Item Object
#### Marker Object
#### Ticks

Adobe allows broad control over the entire Premiere Pro application via an ExtendScript-based API. ExtendScript can access and alter of most project elements, including metadata, exporting and rendering options. Whttp://ppro.aenhancers.com/index.html

## A more challenging Example

Insert markers at every X frames or Y seconds in the sequence's frame rate.