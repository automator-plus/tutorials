<h1> Adobe's ExtendScript Programming Basics</h1>


<p align="center">
  <img src='./assets/cover-image.jpg'>
  <cite>Photo by <a href='https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Fotis Fotopoulos</a> on <a href='https://unsplash.com/'>Unsplash</a>.</cite>
</p>

<h2> Table of Content</h2>

- [History of JS and Adobe's Extend Script](#history-of-js-and-adobes-extend-script)
- [Writing JavaScript in Chrome](#writing-javascript-in-chrome)
- [JS Basics](#js-basics)
  - [Hallo World](#hallo-world)
  - [Variables](#variables)
  - [Variable Types](#variable-types)
  - [If Statements](#if-statements)
  - [For Loops](#for-loops)
  - [Objects](#objects)
  - [Functions](#functions)
- [Something with PP API?](#something-with-pp-api)

## History of JS and Adobe's Extend Script

Below is a shameless copy from Wikipedia. Why rewrite what has been curated over the years by the world? 

JavaScript often abbreviated as <b>JS</b>, is a <a href="https://en.wikipedia.org/wiki/Programming_language" title="Programming language">programming language</a> that conforms to the <a href="https://en.wikipedia.org/wiki/ECMAScript" title="ECMAScript">ECMAScript</a> specification. JavaScript is <a href="https://en.wikipedia.org/wiki/High-level_programming_language" title="High-level programming language">high-level</a>, often <a href="https://en.wikipedia.org/wiki/Just-in-time_compilation" title="Just-in-time compilation">just-in-time compiled</a>,
and <a href="https://en.wikipedia.org/wiki/Programming_paradigm" title="Programming paradigm">multi-paradigm</a>. 
Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behaviour, and all major web browsers have a dedicated JavaScript engine to execute it.

JavaScript is a language programmers love to hate. Over the years, JavaScript has become such a bastardised language; you can really do anything with JavaScript. Usually, there's a plug-in for almost everything you want to do and there are a ton of online resources available to help you on your way to greatness. For a concise JS tutorial you can check out <a href='https://www.learn-js.org/'>learn-js'</a> tutorial, or if you're looking for a tutorial with a bit more around the waist, check out <a href='https://www.w3schools.com/js/'>w3schools'</a> tutorial. 

But, who's in control of the JavaScript language? Who says *this* is how we are doing things in *this* version of the JavaScript language? Who decides what stays and what goes over the years? All these are good questions, however, probably the most important question about JavaScript for us in this tutorial is:

>How does JavaScript relate to Adobe's ExtendScript?

And the answer is... 

JavaScript is related to Adobe's ExtendScript via the <a href="https://en.wikipedia.org/wiki/ECMAScript" title="ECMAScript">ECMAScript</a> specification. Again, from the wiki:

> ECMAScript first appeared in 1997 as a <a href="/https://en.wikipedia.org/wiki/Scripting-language" class="mw-redirect" title="Scripting-language">scripting-language</a> <a href="/https://en.wikipedia.org/wiki/Specification_(technical_standard)" title="Specification (technical standard)">specification</a> standardized by <a href="/https://en.wikipedia.org/wiki/Ecma_International" title="Ecma International">Ecma International</a>. JavaScript has remained the most widely used implementation of ECMAScript since the standard was first published, with other implementations including <a href="/https://en.wikipedia.org/wiki/JScript" title="JScript">JScript</a> and <a href="/https://en.wikipedia.org/wiki/ActionScript" title="ActionScript">ActionScript</a>.

Funny how the Wikipedia community doesn't even mention <a href='https://en.wikipedia.org/wiki/ExtendScript'>Adobe's ExtendScript</a> as another, quite successful, implementations of ECMAScript. But it is, Adobe's ExtendScript was build using the ECMAScript 3 standard published in December 1997. Pretty old right? To give you an idea, in 2019 the ECMAScript 10 standard was published. For a full list of the ECMAScript version you can check <a href='https://en.wikipedia.org/wiki/ECMAScript#Versions'>this</a> out. 

If you think this is confusing, you're right! It is! A table that sort of brought it together for me was the one shown below from <a href='https://www.w3schools.com/js/js_versions.asp'>w3schools</a>.

<table >
    <tbody>
        <tr>
            <th>Year</th>
            <th>JavaScript</th>
            <th>ECMA</th>
            <th>Browser</th>
        </tr>
        <tr>
            <td>1996</td>
            <td>1.0</td>
            <td></td>
            <td>Netscape 2</td>
        </tr>
        <tr>
            <td>1997 </td>
            <td>&nbsp;</td>
            <td>ECMAScript 1</td>
            <td>IE 4</td>
        </tr>
        <tr>
            <td>1998</td>
            <td>1.3</td>
            <td>&nbsp;</td>
            <td>Netscape 4</td>
        </tr>
        <tr>
            <td>1999</td>
            <td>&nbsp;</td>
            <td>ECMAScript 2</td>
            <td>IE 5</td>
        </tr>
        <tr>
            <td>2000</td>
            <td>&nbsp;</td>
            <td>ECMAScript 3</td>
            <td>IE 5.5</td>
        </tr>
        <tr>
            <td>2000</td>
            <td>1.5</td>
            <td>&nbsp;</td>
            <td>Netscape 6</td>
        </tr>
        <tr>
            <td>2000</td>
            <td>1.5</td>
            <td>&nbsp;</td>
            <td>Firefox 1</td>
        </tr>
        <tr>
            <td>2011</td>
            <td>&nbsp;</td>
            <td>ECMAScript 5</td>
            <td>IE 9 (Except "use strict")</td>
        </tr>
        <tr>
            <td>2011</td>
            <td>1.8.5</td>
            <td></td>
            <td>Firefox 4 (Except leading zeroes in parseInt)</td>
        </tr>
        <tr>
            <td>2012</td>
            <td>&nbsp;</td>
            <td></td>
            <td>IE 10</td>
        </tr>
        <tr>
            <td>2012</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Chrome 23</td>
        </tr>
        <tr>
            <td>2012</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Safari 6</td>
        </tr>
        <tr>
            <td>2013</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Firefox 21</td>
        </tr>
        <tr>
            <td>2013</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Opera 15</td>
        </tr>
        <tr>
            <td>2015</td>
            <td>&nbsp;</td>
            <td>ECMAScript 2015</td>
            <td>Partially Supported in all Browser</td>
        </tr>
    </tbody>
</table>

To summarise, JavaScript was developed for the <a href='https://en.wikipedia.org/wiki/Netscape'>Netscape</a> browser. Netscape 2 was the first browser to run JavaScript. After Netscape the Mozilla foundation continued to develop JavaScript for the Firefox browser. As of early 2018 _only_ the Chrome (version 68) and Opera (version 55) browsers are supporting **ES7**. In 2020, until all the kinks have been worked out with the ES7 standard, most browsers: Chrome (version 51), Firefox (version 54), Edge (version 14), Safari (version 10), Opera (version 38) support ES6 - i.e. most popular browsers except IE.

What does this all mean to you and me as Adobe ExtendScript developers? Well, think about it this way. If you were Adobe in the early 2000 and you needed a programming language to interact with your awesome suite of applications, would you write a programming language yourself? Or, start using a variant of a language that has gained some traction; and more importantly, a language that already has developers that speak it. 

For us, in 2020 this means we are going to be writing JavaScript code, but old-school JavaScript code - ES3 code. Not that the core functionality and syntax of JS changed much from 1997 to 2020. Notice I say *core* functionality. Don't get me wrong, many benefits come with using the latest ECMAScript standards, such as  more built-in functions that ease your life and much more concise syntax that encourages writing cleaner and more robust code. 

So, ideally we want to write our code in ES6 JavaScript, JS as it used mostly on the web today, but when we deploy our code within Adobe we want to deploy ES3 (ExtendScript) code so that Adobe can understands it. Luckily technologies exist that do exactly that for us, translate our code between different versions of ECMAScript. To give you a taste of the high-level additions that ExtendScript has seen over the years, below we show a another table from <a href='https://www.w3schools.com/js/js_versions.asp'>w3schools</a>  with the high-level changes that ES has seen over the years.  

<table>
    <tbody>
        <tr>
            <th>Ver</th>
            <th>Official Name</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>1</td>
            <td>ECMAScript 1 (1997)</td>
            <td>First Edition.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>ECMAScript 2 (1998)</td>
            <td>Editorial changes only.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>ECMAScript 3 (1999)</td>
            <td>Added Regular Expressions.<br>Added try/catch.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>ECMAScript 4</td>
            <td>Never released.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>ECMAScript 5 (2009)<br><br>
                <a href="js_es5.asp" class="w3-btn">Read More: JS ES5</a>
            </td>
            <td>
                Added "strict mode".<br> Added JSON support.<br> Added String.trim().<br> Added Array.isArray().<br> Added Array Iteration Methods.<br>
            </td>
        </tr>
        <tr>
            <td>5.1</td>
            <td>ECMAScript 5.1 (2011)</td>
            <td>Editorial changes.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>ECMAScript 2015<br><br>
                <a href="js_es6.asp" class="w3-btn">Read More: JS ES6</a></td>
            <td>Added let and const.<br> Added default parameter values.<br> Added Array.find().<br> Added Array.findIndex().<br>
            </td>
        </tr>
        <tr>
            <td>7</td>
            <td>ECMAScript 2016</td>
            <td>Added exponential operator (**).<br> Added Array.prototype.includes.</td>
        </tr>
        <tr>
            <td>8</td>
            <td>ECMAScript 2017</td>
            <td>Added string padding.<br> Added new Object properties.<br> Added Async functions.<br> Added Shared Memory.</td>
        </tr>
        <tr>
            <td>9</td>
            <td>ECMAScript 2018</td>
            <td>
                Added rest / spread properties.<br> Added Asynchronous iteration.<br> Added Promise.finally().<br> Additions to RegExp.
            </td>
        </tr>
    </tbody>
</table>

All things considered, all of this ECMA stuff only becomes important when you're getting serious about writing ExtendScript and you want to distribute a sustainable extension. However, for us today, we're doing *basic* ExtendScript programming, but keep the ECMAScript version concept in mind when you copy JS code from the web and it doesn't *just work* in your ExstendScript code - it might have some syntax that is not supported in Adobe's ExtendScript, a.k.a. ECMAScript 3. Hopefuly I've convinced you that JS and ES are "basically" the same and going forward, I'll refer to us coding in JavaScript and not ExtendScript or ECMAScript. 

## Writing JavaScript in Chrome

Since the core JS syntax like declaring a variable, adding numbers together or printing something out to the console hasn't changed much over the years, we can hop into our Chrome browser, which will give us an easy place to write some JS code and explain the above concepts. To open a console in Chrome, right-click anywhere on an open webpage and click `Inspect`. I show this below, but you're going to have to excuse my Dutch: `Inspecteren`=`Inspect`. Clicking on `Inspect` should bring up the the `Chrome Inspector` and you're going to want to go to the `Console` tab shown below. 


<p align="center">
  <img src='./assets/chrome-inspector.jpg' width='100%'>
</p>


Great! Maybe you didn't know that all browsers have a JavaSript console built-in. B.t.w. they do, sometimes it is a bit tricky to get to them. I know with Safari on Mac you've got to enable "Developer Tools". The interface you are presented with, the image shown above, is what we call a <a href='https://en.wikipedia.org/wiki/Command-line_interface'>Command Line Interface</a> (CLI) as opposed to a <a href='https://en.wikipedia.org/wiki/Graphical_user_interface'>Graphical User Interface</a> (GUI). The difference? The one uses pictures, the other uses text. For reference, the `console` is also sometimes referred to as the `terminal` or just `CLI`. 

## JS Basics 

If you've never coded JavaScript  in your life, I urge you to work through <a href='https://www.learn-js.org/'>this learn-js</a> tutorial and <a href='https://www.w3schools.com/js/'>this w3schools</a> tutorial at your own pace. 

> ⚠️ Warning! If you can code JavaScript the following section is not for you, the next bit covers the basics of JavaScript like what is variable, variable types, conditionals, JSON objects and functions. If you know these words and concepts well, you need not proceed. If you've never heard of these words or you want a refresher on coding in JS, read forth.

Learning a programming languages is very similiar to learning to speak a new language. First you learn basic words; in english words like: `Hi`, `I`, `am`, `is`, `are`, etc. Once you know the basic words you can start stringing them together to form sentences: `Hi I am _`. Once you're comfortable with writing sentences, you can start stringing those together to get paragraphs and essays. To continue this metaphor, in programming terms, paragraphs will be short little scripts that execute a bit of code, whereas essays will be fully fledged programs that do a lot of complex computations.

Below we show some basic "words", "sentences" and "paragraphs" that you'll see in the JS programming language along with a short description of their meaning.

Examples of "Words" in JS with their meaning 

+ `var`: Used to declare a variable
+ `const`: Used to declare a constant
+ <code>``</code>: Used to add variables to text inline
+ `//`: Used to comments (text that is not executed)
+ `""` or `''`: Used to indicate text
+ `;`: Used to indicate the end of a line
+ `[]`: Used to declare lists
+ `{}`: Used to declare objects and indicate scope. 
+ `if`: Used to check *if* something is `true` or `false`
+ `for`: Used to loop through lists
+ `console.log()`: Used to print something out to console
+ `console.dir()`: Used to print out objects to the console

We can then start using these words to make some sentences, for example:

+ `var myName = "John"`: Declare a variable called `myName` and assign a value of `"John"` to it
+ `var fruits = ['Apples', 'Pears', 'Peaches']`: Declare a list called `fruits` that contains 3 values: 'Apples', 'Pears', 'Peaches'
+ `var clip = {'start':0, 'end':10, 'type':'Audio'}`: Declare an object, also called a JSON (JavaScript Object Notation) object called `clip` that contains 3 attributes: `'start'`, `'end'` and `'type'` and 3 associated values: `0`, `10` and `"Audio"`. 

A short "paragraph" in JavaScript would look something like:

```javascript
var durationThreshold = 10;
var clips = [
  {'id':1, 'start':0, 'end':10, 'type':'Audio'}, 
  {'id':2, 'start':10, 'end':15, 'type':'Audio'},
  {'id':3, 'start':15, 'end':35, 'type':'Video'}
  ];

for (var clip in clips) {
  var clipDuration = clips[clip].end - clips[clip].start
  if (clipDuration >= durationThreshold){
    console.log(`id: ${clips[clip].id}, type: ${clips[clip].type}`);
  } 
}
```

Not making any sense? Don't worry! How long it took you to write your first diary entry in English? Luckily, this time around you can already spell English words, you just need to learn the terms you are allowed to use and the "grammar" of stringing these terms and concepts together in JavaScript. 

For the inquisitive, the code above does the following:
+ Declare a variable called `durationThreshold` and set it equal to the value of `10`.
+ Declare a list, also called an array, of 3 objects, with each object having 4 attributes (`'start'`, `'end'`,  `'type'` and `'id'`) and 4 associated values.
+ We then loop through the `clips` list using what is called a `for`-loop and calculate the `clipDuration` of each clip as the difference between the `end` and `start` attribute of each clip.
+ We then ask the question: Is the current clip's duration greater *or equal* that our `durationThreshold`'s value (10), if so, print out the `type` and `id` of the current clip to the console.

The output is shown below:

<p align="center">
  <img src='./assets/short-coding-paragraph.gif' width='530px'>
</p>

Before we start writing essays, let's start with the words...

### Hallo World

There is a coding tradition that the first program you write in any new language has something to do printing out or displaying the text "hallo world". At the bottom of your console, next ot the `>`-character is where we're going to be writing some code.

<p align="center">
  <img src='./assets/where-to-type.gif' width='530px'>
</p>

Execute the following command in the console:

```javascript
console.log("Hallo World");
```

<p align="center">
  <img src='./assets/hallo-world.gif' width='530px'>
</p>

Let's unpack what is happening here. We've used the built in JS function `console.log` to print out "Hallo World" to the console. Pretty intuitive right? JavaScript comes with a lot of in-built functions, think of these as the words in a spoken-language. You first need to know what words you can speak and how 


### Variables

Variables... What are variables? 

Essentially variables are placeholders, things that house values for us that change (are variable) over time. For example, below we will declare 2 variables called `a` and `b`. These names are completely arbitrary and it is up to you to choose meaningful variable names - `a` and `b` are bad variable names BTW.

In JavaScript we declare variables using the `var` keyword, like `var a = 1`. OK, you don't have to type `var`, `a = 1` will work just fine. However, this is where those ECMA Script version snags come in. In ES3 it is fine to declare your variables without using `var`, however if you're going to be transpiling code from ES6 to ES3, you're going to need the `var` keyword. 

Small things like this give the later versions of ECMAScript its robustness. In the background JavaScript can do a lot more checks and balances if you _explicitoly_ declare what type of variable you are declaring. A variable that will change over time, or a variable that will stay constent. In the later versions of ECMAScript there's a distinction, for example:

```javascript
var a = 3;
const b = 4;
```

If you later want to reassign `b` an error will be thrown,

<p align="center">
  <img src='./assets/const-b.gif' width='530px'>
</p>

Compared to assigning a value to `a`,

<p align="center">
  <img src='./assets/var-a.gif' width='530px'>
</p>

However, if you type nothing, 

```javascript
a = 3;
b = 4;
```

anything can really be done with your variable downstream. So where does this leave you? Rather use `var` instead of nothing. This way you can use you're code later on if you start using transpilers, also, it's only 4 characters and a good JS coding habit to form. Until you know why the other keywords exists and know why you need them, just use `var`. 

Ok, so variable hold values. But why? Well, to make programming more modular and easier to write. To bring it back to the Premiere Pro API, instead of writing:

```javascript
app.project.activeSequence.videoTracks[0].setMute(true);
```

We can be a bit more verbose, declaring intermediary variables to store our sub computations and make the code more readable, maintainable and ultimately suistainable. 

```javascript
videoTracks = app.project.activeSequence.videoTracks; // Get all the video tracks
firstTrack = videoTracks[0]; // Get the first video track
firstTrack.setMute(true); // Set the firstTrack's muted attribute using the setMute method
```

But what about efficiency I hear you say? Doesn't declaring more variable take up more space in memory? In the background JS doens't really need *that* much more space to store your extra variable because of what are called pointers. With most *big* things we want to store in variables, we only store them in one place and then *point* to them. Pointers are way outside of the scope this series, but just some motivation as to why more variables are usualy a good things if you're code is more readiable and understandable. 

Someone once said: "machines don't read code, humans do."

### Variable Types

After the value of your variable stored in RAM, your variable's type is the seconds most important thing to take note of. Knowing which type your variable is will allow you to anticipate how they will behave when certain opertaions are applied to them. For example, if we declare 2 text variables, called  *string* variables,

```javascript
var greetingTemplate = "Hallo there, ";
var name = "John";
var result = greetingTemplate + name;
console.log(result);
```

and I sum them together using the `+` operator I get, "Hello there, John"

<p align="center">
  <img src='./assets/string-concat.gif' width='530px'>
</p>

You can think that the behavior will be different if I declare 2 numbers, for example

```javascript
var number1 = 1;
var number2 = 2;
var result = number1+number2;
console.log(result);
```

<p align="center">
  <img src='./assets/number-summation.gif' width='530px'>
</p>

So what tells JavaScript which is which? The double quoates, `""`, in this case. If we write anything in double quotes JavaScript interprets it as a string. We can check the types of variables using the `typeof` function, for example

```javascript
var stringNumber = "2";
var numberNumber = 2;
console.log(typeof(stringNumber))
console.log(typeof(numberNumber))
```

<p align="center">
  <img src='./assets/type-checking.gif' width='530px'>
</p>

### If Statements

If statements, sometimes referred to as conditionals, are used to control the flow of our code. Most of the time in your code you'd want to excute a bit of code *if* somethings holds true, otherwise, you want to excute another piece of code - `if`-statements enable us to do that.

A basic if statement looks as follows:

```javascript
if (condition){
  // code to execute
}
```

We tell javascript we would like to check if something is true by typing `if` followed by an open and close round-brackets containing the condition we want to evaluate. We then put all the code we want to execute if the conditions hold between curly braces, `{}`. For example, we might want to check if the `age` variable is greater or equal to `18` and if so print out `Legal Eagle!` to the console, for that we'd write something like:

```javascript
if (age >= 18){
  console.log("Legal Eagle!")
}
```

Some basic comparison operators that you'll use in 80% of your `if` statements:

+ `a == b` checking if `a` and `b` are equal
+ `a != b` checking if `a` and `b` are not equal
+ `a > b` checks if `a` is greater than, but not equal to `b`
+ `a >= b` checks if `a` is greater than, or equal to `b`
+ `a < b` checks if `a` is less than, but not equal to `b`
+ `a <= b` checks if `a` is less than, or equal to `b`

A funky operator you'll see in JS is `===`. This operator not only checks if the value of two variable are equal, but _also_ check's that their types match. For example:

```javascript
var a = "2";
var b = 2;
console.log(a == b);
```

will print out `true`, whereas

```javascript
var a = "2";
var b = 2;
console.log(a === b);
```

will print out `false` as `"2" !== 2`. And yes, `!==` is also a comparison operator you can use in `JS` checking that the value *and* the types aren't equal.

<p align="center">
  <img src='./assets/tripple-equal.gif' width='530px'>
</p>

Once you start writing conditionals, you'll quickly run into the situation where you want to write more complex conditions, like this _and_ this, _or_ that should hold before we execute some code. For this, JS uses the `&&` and `||` operators. The `&&` is a logical `AND` and the `||` is a logical `OR`. Let's expand our Legal Eagle example by also checking if the age is less than 122 - the age of the oldest person to date.


```javascript
if ((age >= 18) && (age < 123)){
  console.log("Legal Eagle! And a viable age... ")
}
```

Our sentence, or code snippet, now checks that age is greater or equal to 18, but also checks that the age is less than 123. We've purposefully made this `< 123` instead of `<= 122` to illustrate the difference. If we know that `age` will _only_ be an integer (whole) numbers, then both conditions, `< 123` and `<= 122`, are interchangeable, however, if age can have decimal values, then any age up to 122.999999999 will also cause our `Legal Eagle! And a viable age... ` message to print. Also, note the extra round braces around `(age >= 18)` and `(age < 123)` which is needed in JS to reduce multiple conditions to one.

`OR` and `AND` work as you expect, for 2 condtions to be true when you `AND` then *both* conditions need to be true, wheras with `OR` only *one* condition needs to be true. The truth table below shows the variations:

|`a`    |`b`    |`a AND b` |`a OR b`  |
|:---:|:----:|:----:|:----:|
|false|false|false|false|
|false|true |false|true |
|true |false|false|true |
|true |true |true |true|

### For Loops

### Objects

JSON

console.dir()

### Functions

## Something with PP API?

A script that colors all the clips on the muted tracks maybe? 