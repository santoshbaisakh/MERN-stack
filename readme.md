SYLLABUS FOR MERN STACK WEB DEVELOPMENT


    1.HTML (structuring the wedsite)
    2.CSS (Styling the web pages)
        - Bootstrap (light weight frmework)
        - Tailwind (light weight framework)
    3.Javascript (Building logic / function)
        - React JS (Library of JS)
        - Next JS ( framework of react JS)


    Backend part:-

    4. Node JS
        - Express JS (Framework)

    Database part:-

    5. MongoDB
        - Mongoose (Framework)

    API intregration and security:-

    6. Restful API integration
    7. Authentication and Authorization

    Artificial Intelligence:-

    8. Basic LLM's model (Large language model)
    9. Promt Enginnering 
    10. ChatGPT/ OpenAI/ Gemini etc..
    11. At chatbot

    Deployment and Devops part:-

    12. Hosting in vercel, render like cloud platform
    13. Use docker / AWS for Development and pipeline

    Capstone project:- 

    14.Build end-to-end MERN stack project
    15. At integration with MERN

HTML :

- HTML stands for HYPER TEXT MARKUP LANGUAGE.
- It is used for structuring the websites.
- Html is a markup language because it contains the skeleton structure of a webpage.
and it is build on tags.
- All the HTML it written with tags.
The main element of HTML is <html> tag.


 Head:           
  - in head tag we have some tags like <title> & some meta elements.
  - <title> tag contains our website title in the title bar.
  - meta elements help us to create responsive with some size.
  - we also attatch some external style sheet link in that head tag.

Body :
  - body contain all the page structure of a webpage.
  we can design & develop all the things in the body part.

Heading:
  - Heading is a major element in our HTML page.
  - there are 6 types of header are there (h1-h6)
  - <h1> is the largest heading & <h6> is the smallest.
Paragraph:
  - Paragraph plays a major role to describe our data or information breifly.
  - it is denoted by a element <p>.
Break:
  - it is used to break the line and create a newline. it is denoted by <br>.
  - it is a single tag.
Horizontal tag:
  - it is used to create a horizontal line.
  - it is also a single tag.
Image tag:
  - to put an image in our website, we need <img> tag to add image.
  - it is a single tag.
  - in img tag, there are some elements to configure image in the right direction.
  - attributes describe the behaviour of an HTML element.
  - atributes in <img> tag are:
     -> src (image source)
     -> alt (alternate of the image, image name can be put)
     -> height (image height)
     -> width (image width)
Anchor tag:
  - it is used to attach external links in our web pages.
  - it is denoted by <a>.
  - anchor tag contains 2 attributes -> href  and target
    -> href (hyper reference) : reference a point or page on another web page.
    -> target : how we can open that link.
          |-> _self : it opens that link in our own website itself.
          |-> _blank : it opens the link  by creating a new tab.
HTML Formatting :
  - to format the text in a proper way.
  - there are 10 types of formatting.
     -> <b> : for BOLD.
     -> <i> : for ITALICS.
     -> <em> : to emphasize the text.
     -> <small> : for small text.
     -> <ins> : for insert text.
     -> <del> : delete text.
     -> <mark> : mark text.
     -> <strong> : stronger text.
     -> <sup> : superscript.
     -> <sub> : subscript




HTMl Table :-

- As we draw a normal table to maintain our data so html provide a table like structure.
- <table> is the main tag of html table.
- inside html table we have
    - <tr> -> table row
    - <td> -> table data
    - <th> -> table heading
ex.


sl. no.     name    salary
1           rakesh  23000
2           rishi   54000
3           sai     67000
4           ritesh  43000

HTML LIST :-

- As our day to day life, when we store some data inside a proper format that we called our list of data.
- HTMl also provide a list to store some data inside it.
- In HTML there are 2 types of list are there....

1. Unordered list ->

- When we store that data in a un-organized form that called our unordered list.
- It is denoted by <ul>
- Inside <ul> tag we have <li> tag. (<li> -> list item )


2. Ordered list -> 

- When we store that data in a organized form that called ordered list.
- It is denoted by <ol>.
- Inside <ol> tag we have <li> tag. (<li> -> list item )

ex.

- My fav. skills are -> (UL)
    - HTML
    - CSS
    - JS

- My fav. hobbies are -> (OL)
    1. read newspaper
    2. do coding
    3. practicing 

Block level element & inline element in HTML :-

Block level element -> 

- a block level element always starts on a new line, and the browser automatically add some space before and after the element.
- a block level element always takes up the full width available.

ex. <div>, <p>, <main>, <form>, <section> etc...

Inline Element ->

- An inline element does not starts on a new line.
- An inline element only takes up as much width as necessary.

ex. <span>, <label>, <button>, <sup>, <sub>, <br> etc.....

Form in HTML :-

- an HTMl form is used to collect some user inputs for the data storage purpose.
- <form> tag is the main tag of HTML Form.
- Inside <form> tag we have label & input tag for take the user input.
- there are some input tags like -->

1. <input type="text">
2. <input type="button">
3. <input type="checkbox">
4. <input type="color">
5. <input type="date">
6. <input type="email">
7. <input type="file">
8. <input type="hidden">
9. <input type="image">
10. <input type="month">
11. <input type="number">
12. <input type="password">
13. <input type="radio">
14. <input type="range">
15. <input type="search">
16. <input type="submit">
17. <input type="time">
18. <input type="url">
19. <input type="week">
20. <input type="tel">

Semantic Tag in HTML :-

- Writing semantic markup means understanding the hierarchy of your content and how both mechanisms will work on a web browser.

- Most common semantic tags are...
    - header
    - main
    - nav
    - section
    - article
    - aside
    - footer etc...

CSS :-

- CSS stands for cascading style sheet.
- Basically it is used for the designing & styling our web pages.
- CSS is not a programming language, it's a styling language...
- Syntax :- 

selector{
    properties: value;
}
ex.

h1{
    color: red 
}

- In the above example h1 is the selector, color is the properties & red is the value of that properties.
- there are 3 types of CSS are present. like..

1. Inline CSS :-

- We used inline css inside the tag name.
- inline css have highest priority by compare with other types of css.
- we can put our styling by creating a "style" attribute inside the tag.
2. Internal CSS:- 

- we used internal css inside <head> tag, by creating a <style> tag inside it.
- internal css used many cases for small codebase.
3. External CSS :- 

- we used external css by creating a separate CSS file and link that file in our HTML page.
- we can link the external css file by <link> tag.
- it is most popularly used because everyone wants to see the clean code so all files have to be separated.


Selectors in CSS :-

- we used css selectors for selecting an HTML element for the shake of designing.
- There are basically 5 types of selectors are there...

1. ID selector :-

- ID selector is a type of selector that used for unique design.
- It is denoted by "#".

2. Class selector :-

- Class selector is a type of selector that used for similar design in multiple element.
- it is denoted by "."

3. Group selector :-

- Group selector is a type of selector that used for design more than one element by creating a group.

4. Universal selector :- 

- Universal selector is a type of selector that used for design whole HTML element in a single design.
- It is denoted by "*".

5. Element selector :- 

- Element selector is a type of selector that used for design single single element separately.

Practice task :-

1. Create a simple div with an id "box". Add some text content inside th div. Set it's background color to "blue".

2. Create 3 headings with h1, h2, and h3. Give them all a class "heading" & set color of heading to "red".

Properties in CSS :-

1. color : red/blue/green etc...
2. background-color : red/green/blue etc...
3. text-align : left/right/center
4. text-decoration : underline/ overline/ line-through
5. font-weight : normal/ bold/ bolder/ 100/ 300/ 900 etc...
6. font-family : italic/ san-serif/ roboto/ cursive
7. line-height : 1/ 2/ 4/ 5 etc....
8. text-transform : uppercase/ lowercase/ capitalize

etc....

Box model in CSS :-

- Box model is used for properly placed the element in the right direction.
- It measures all the size of that particular element and place them.
- There are 5 types of box model are there....

1. Height
2. Width
3. Border (border-radius)
4. Margin (left, right, top, bottom)
5. Padding (left, right, top, bottom)

Display properties in CSS :- 

- we used display property to showcase our element in a proper form to display.
- basically there are 4 types of display property like...

1. display-inline -> takes only the space required by the element.
2. display-block -> takes full space available in width.
3. display-inline-block -> similar to display inline but difference is that when we apply padding over here.
4. display-none -> to remove element from the document flow. (none - nothing)

Flex-Box in CSS :-


- we can use CSS flex-box to create one dimensional design in a single page.
- flex-box have some properties like..

1. display: flex;
2. flex-direction: row/row-reverse/column/column-reverse
3. justify-content: center/ space-between/ space-evenly/ space-around
4. align-item: center/top/bottom
5. flex-wrap: wrap/no-wrap

Grid-Layout in CSS :-

- CSS grid-layout is a two-dimensional layout system for the web.
- A grid is a collection of horizontal & vertical lines creating a pattern against which we can line up our design element.
- some important properties of grid-layout...

1. display: grid;
2. grid-template-columns: repeat(4,1fr)/ 100 200 300;
3. grid-gap: 20px/ 30px etc..
4. grid-auto-rows: 100px / 200px etc...

CSS Units :-

- Basically there are multiple units in CSS but we will discuss some important units.

1. px (pixel) - fixed
2. % (percentage) - percentage fully depends upon their parent element

ex.

rekesh - 100 -> 20% -> 20
bikash - 1000 -> 20% -> 200

3. vh (viewport height) & vw (viewport width) -> it will increase or decrease their size as per the screen size.

4. vmax (viewport maximum) -> if the screen size can be squized to a phone screen so our content can be small so it break that and create a new line of content.

5. em & rem (root units of css) -> we can handle all the tag by a root element/tag so that it would be feasible for our content.

html - semantic tags
css - animation (scale, skew, rotate, etc....)

Position Property in CSS :- 

- The position property specify the type of positioning method used for an element.

- there are 5 types of position property are there...

1. static - default value, it does not change their position.
2. relative - the element is positioned relative to it's normal position.
3. absolute - the element is positioned relative to it's ancestors.
4. fixed - the element is positioned relative to the browser window.
5. sticky - the element is positioned based on the user scroll position.

Animation in CSS :-

Animation (transition) :- To change the state of an object

- transition enables you to define the transition between two states of an element.
- some important transition properties are...

1. transition-property : property you want to transition (font-size, color, bg color)
2. transition-duration : 2s/3s/4s etc...;
3. transition-timing-function : ease-in/ ease-out/ ease-in-out/ linear/ steps(4) etc...
4. transition-delay : 2s/3s/4s/5s etc....;

- transition shorthand (property names/duration/timing-function/delay)
     transition: font-size 2s ease-in 5s;

Animation (transform) :-

- it is used to apply 2D and 3D transformation to an element.

1. Transform (Rotate) ->
    - transform: rotate(45deg/90deg etc...)
    - rotate: 45deg;
    - rotateX: 45deg;
    - rotateY: 45deg;
    - rotateZ: 45deg;

2. Transform (scale) ->

    - transform: scale(2/3 etc...)
    - transform: scale(1,2)
    - transform: scaleX(0.5)
    - transform: scaleY(0.5)

3. Transform (Skew) ->

    - transform: skew(45deg);
    - transform: skewX(45deg);
    - transform: skewY(45deg);
    - transform: skewZ(45deg);

Animation (keyframe) ->

- It is a special CSS rule that define the different stages of an animation over the time.

- syntax :- 

@keyframe spinScale{
    0%{
        transform: rotate(0deg) scale(1);
    }
    50%{
        transform: rotate(180deg) scale(1.5);
    }
    100%{
        transform: rotate(360deg) scale(2);
    }
}

In keyfrmaes the properties are ->

- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration count
- animation-direction

Note -> @keyframe is the heart of css animation 

Rest Topic ->

HTML - Semantic tags
CSS - key-frames animation

JavaScript :-

- JavaScript is used for building logics of a web page.
- javascript is a high-level programming language, used in both client side (frontend) as well as server side (backend).
- JavaScript comes from echma script so we see the latest version of javascript in terms of echma script.
- the latest version of javascript is ES16.
- Node JS is the runtime environmment of javascript.

Variable in JavaScript :-

- Variable is a container to store some digital data inside it.
- In JavaScript there are 3 types of variable are there

1. var :-

- var is a type of variable which is used for changing the variable value in later stage.
- var is used in older browser, so now in these days we will don't use the var most of the cases.

2. let :-

- let is a type of variable which is also used for changing the variable value in later stage.
- let is a block scope/function scope so we have been used let most of the cases.

3. const - constant

Rules for creating the variable name :- 

- Variable names are case-sensitive like "a" & "A" is different.
- only letters, digits, underscore & special character($) is allowed.
(Do not keep white space over here)
- only letter, underscore, or special character($) should be the 1st character only.
- reserved words can not be a variable name.
ex. fro, while, var, let, console etc...

Datatype in JavaScript :-
- Datatype is an attribute associated with a piece of data that tells a computer system how to interpret it's value.
- In datatype we used "typeof" operator to know, what type of data it is. 
- mainly in JavaScript there are 2 types of datatypes are there..

1. Primitive datatype :-

- In primitive datatype there are 7 types of primitive datatypes are there...

1. Number - Number are the type of datatype those it contain some numerical values.
2. Boolean - In boolean datatype we got boolean value like true/false.
3. Undefined - the data is not defined.
4. Null - Nothing
5. bigInt - Big integer value
6. String - sequence of characters 
7. Symbol - In symbol we got one symbol of more than one value.

2. Reference / non-primitive datatype :-


- Reference datatype are the type of datatype which can hold multiple element in a single frame.
- There are 3 types of reference datatypes are there..

1. Array :-

- Array is a collection of similar type of data stored in contigious memory location. 
- Array index starts from "0".

2. Object :- 

- object is a reference datatype where we can store more than one element in a single frame.
- mainly objects are working on (key: value) pair.

ex.

let hari = {
    "name" : "Hari Babu",
    "Phone-no" : 6765645345,
    "Addresss" : "Bhubaneswar",
    "Career" : "Good"
}

- In the above example left hand side are the "keys" , right hand sides are the "values" of that keys & hari is our object name.

3. Function :- 

- Function is a block of code that perform specific task.
- Function reduce our code complexity, time & space complexity.
- syntax :- 

function creation -> 

function my_schedule(){
    console.log("I wake up at 5 am")
    console.log("Then take a good shower")
    console.log("Eat breakfast with a cup of tea")
}

function calling -> 

my_schedule()
my_schedule()

Operator in JS :-

- operator are key features to do some task.
- ex. A + B
- In the above example A & B are the operandds & "+" sign is our operator.
- In javascript, there are 5 types of operator are there...

1. Arithmetic operator -> (+, -, *, /, %, **)
2. Assignment operator -> (=, +=, -=, *=, /=, %=, **=)
3. Comparision operator -> (==, !==, ===, <, >, <=, >=)
4. Logical operator -> Logical AND (&&), Logical OR (||), Logical NOT (!)
5. Unary operator -> Increment (++), decrement (--)

Conditional Statement ->

- To implement some condition in the code.
- there are 3 types of conditional statement are there...

1. if Condition :-

- if condition is true then statement is true.
- syntax :-

if(condition){
    statement
}

2. if-else condition :-

- if condition is true then statement is true otherwise false.
- syntax :-

if(condition){
    statement
}else{
    statement
}

3. if-elif condition :-
- it's check the condition multiple times, where the condition is true, it returns the statement.
- syntax :-

if(condition){
    statement
}else if(condition){
    statement
}else if(condition){
    statement
}else{  // default condition
    statement
}

practice task :-

write a code which give grades to student according to their score...

1. 90-100 (A)
2. 80-89 (B)
3. 70-79 (C)
4. 60-69 (D)
5. 50-59 (E)
6. 0-49 (F-Fail)

Loops in JavaScript :-

- Loops are used to execute a piece of code again and again.
- there are 5 types of loops are there...

1. for loop ->

- syntax :-

for(initialization; condition; updation){
    statement
}

ex. we want to print "javascript" 5 times...

for(let i = 1; i <= 5 ; i++){
    console.log("Javascript")
}

working ->

i = 1 -> javascript
i = 2 -> javascript
i = 3 -> javascript
i = 4 -> javascript
i = 5 -> javascript

2. while loop ->

- syntax :- 

initialization;
while(condition){
    statement;
    updation;
}

3. do-while loop ->

- syntax :- 

initialization;
do{
    statement;
    updation;
}while(condition)

4. for-in loop -> it iterates on string & array
5. for-of loop -> it iterates on objects

String in JavaScript :- 

- basically string is a sequence of character used to represent text.
- create a string -> let str = "web bocket".
- we calculate the string length -> str.length property.
- we calculate the string index -> str[0], str[1], str[2] etc...

String literals & interpolation -> 

string literals :-

- It's a way to have embedded expression in string.
- it's denoted by symbol ``.

string interpolation :-

- to create a string by doing substitution of placeholder.
- ex. -> string text $(expression) string text.

escape symbol in string :-

1. \n -> new line 
2. \t -> new tab 

string methods :-

1. str.toUpperCase()
2. str.toLowerCase()
3. str.trim()
4. str.slice(start, (end-1))
5. str1.concat(str2)
6. str.replace(oldVal, newVal)
7. str.replaceAll(oldVal, newVal)
8. str.charAt(idx)

Array in JavaScript :-

- array is a collection of items.
- ex. let arr = ["iron man", "bat man", "spider man"]
- array index starts from "0".
- indexing of array -> arr[0], arr[1], etc...

Looping over an array ->

- Loop -> iteration 
-  syntax -> for (let i = 0; i < arr.length(); i++){
    statement
}

Methods of array :-

1. push() -> add an element to end of an array
2. pop() -> remove from the end of an array
3. toString() -> convert array to string
4. concat() -> add two or more array / join multiple array
5. unshift -> add an element to the start of an array
6. shift() -> remove an element to the start of an array
7. slice() -> return a piece of the array
8. splice() -> change original array (add, remove, replace)

practice question ->

1. For a given array with marks of students -> [78,90,54,32,98,25,70].
find the average mark of the student.

2. For a given array with price of 5 items -> [789,543,590,432,489].
all items have an offer of 10% off of them. change the array to store final price after applying offer.

Function in JavaScript :-

- It is a block of code that perform specific task, can be invoked or called whenever we need.
- ex. (in-build function )

1. console.log("hello") -> in this code .log() is a function
2. "abc".toUpperCase() -> in this code .toUpperCase() is a function 
3. [1,2,3].push(4) -> in this code .push() is a function

- There are two types of function in JavaScript.
1. Normal Function ->

-> Type-A function ->

// Function creation ->

function Function_name(){
    // do some task
}

// Function calling ->

Function_name()

Type-B Function ->

// Function creation ->

function Function_name(parameter_1, parameter_2){
    // do some task
}

// Function calling ->

Function_name(arg_1, arg_2)

2. Arrow Function ->

- It is a compact way of writing a function.
- It uses map() function to retrieve the backend data, filter() function for filterise our data etc...

// Function creation ->

const function_name = (param_1, param_2) => {
    // to do some task
}

// function calling ->

function_name(arg_1, arg_2)

normal function ->
function sum(a,b){
    return a + b;
}
sum(2,3)

arrow function ->

const sum = (a,b) => {
    return a + b;
}
sum(2,3)

Practice Question -> 

1. Create a function using the "function" keyword that takes a string as an argument & return the number of vowels in that string. (TCS)

Map method / function in JS :-

- create a new array with result of some operation. The value it's callback return are used to form a new array. Normally we create a new array by calling the function in every array element.

- Map does not change the original array.
- It does not execute the function for empty array.
- syntax :-

arr.map(callbackFunction(value, index, array))

Filter method / Function in JS :-

- Create a new array of element that gives true for a condition / filterization.
- ex. all even array in the given digits.

let newArr = arr.filter((val) =>{
    return val % 2 == 0;
})

For Each loop in array :-

- arr.forEach(callbackFunction)
- callbackFunction -> it is a function to execute for each element in the array.
- callbackFunction is a function that passed as an argument of another function.

Advance JS :-

1. DOM
2. Event & Event handling
3. Sync & Async code (promise, .then, .catch, async, & await)
4. API handling

DOM in JavaScript :-

- Basically DOM stands for Document Object Model.
- When a web page is loaded, the browser create a document object model of that page.
- The HTML DOM model is constructed as a tree like structure

windows -> document -> HTML -> Head -> meta tags & title
                            -> body -> h1, h2, img etc...

Why we used DOM in JavaScript :-

- JavaScript can change all the HTML element in the page.
- JavaScript can create, delete or edit any HTML page directly through DOM.
- JavaScript can also access CSS styling directly.

Window Object :-

- The window object represents an open window in a browser.
- it is a browser object & it automatically created by browser.
- it is also a global object with lots of properties & methods.

DOM Manipulation :-

1. Selecting with ID -> document.getElementById("myID")

2. Selecting with class -> document.getElementsByClassName("myClass")

3. Selecting with Tag -> document.getElementsByTagName("p")

4. Query Selector ->

    - document.querySelector("id/class/tag")
    - document.querySelectorAll("id/class/tag")

5. Attributes ->

    - getAttribute(attr) -> to get the attribute value
    - setAttribute(attr, value) -> to set the attribute value

6. Insert Element ->

    - node.append(ele) -> adds at the end of the node (inside)
    - node.prepend(ele) -> adds at the start of the node (inside)
    - node.after -> adds after the node (outside)
    - node.before -> adds before the node (outside)

7. Delete Element ->

    - node.remove(ele) -> remove the node

Event in JavaScript :-

- The change in the state of an object is known as event.
- Some famous events are...

1. Mouse Events (click, dblClick, onMouseover)
2. Keyboard Event (keypress, keyUp, keyDown)
3. Form Event (submit)
4. Print Event...

Event Handling :-

- Syntax :-

node.event = () => {
    // hnadle here 
}

Event Object :-

- It is a special object that has details about the event.
- All event handler have access to the event objects properties and methods.
- syntax :-

node.event = (e) => {
    // handle here
}

- In methods you can get -> e.target, e.type etc....

practice task :-

Q. create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again

Sync in JavaScript :-

Synchronous :-

- Synchronous means the code runs in a particular sequence of instruction given in the program.
- Each instruction waits for the previous instruction to complete it's execution.

ex. 

console.log("one")
console.log("two")
console.log("Get data")
console.log("three")

Output -> one two three

Asynchronous :-

- Due to synchronous programming, sometimes important instruction get blocked due to some previous instruction, which causes a delay in the UI.
- Asynchronous code execution allows to execute next instruction immediately and doesn't block the flow.

ex. 

console.log("one")
console.log("two")
setTimeout(() => {
    console.log("three")
},4000) // 4000 ms = 4s
console.log("Four")
console.log("five")

output -> one, two, Four, five, three

Callback in JavaScript :-

- A callback function which passed as an argument of another function.

Callback hell :-

- It's a nested callback stacked below one after another forming a pyramid structure.
- This style of programming becomes difficult to understand & manage.

promise in JS :-

- it is a solution of callback hell.
- syntax :-

let promise = new promise ((resolve,reject)=>{
    //statement
})
Promise in JavaScript :-

- It is a solution of callback hell.
- syntax :-

let promise = new Promise((resolve,reject) => {
    // statement
})

- a javascript promise object can be ->>

1. pending -> the result is undefined
2. resolved -> the result is a value (fulfilled)
3. reject -> the result is an error

- promise.then((res)=>{
    //statement
})
- promise.catch((err)=>{
    //statement
})

Async & Await in JS :-

- async function always return a promise.
- syntax :-

async function my_func(){
    // statement
}

note :- await pauses the execution of its surrounding async function until the promise is settled.

async(statement 1)
await -> statement 2
await -> statement 3
await -> statement 4
await -> statement 5

API handling / fetch API :-

- the fetch API provides an interface for fetching data.
- it uses Requests & Response object.
- the Fetch() methods is used to fetch a data.
- syntax :-

let demo = fetch(URL)

// JSON -> Javascript object notation

Status code of Node JS :-

- 200 -> OK
- 201 -> created 
- 202 -> accepted
- 300 -> multiple choice
- 302 -> found
- 400 -> bad request
- 402 -> payment required
- 404 -> Not found 
- 406 -> not accept 
- 408 -> request timeout
- 500 -> Internal server error
- 502 -> Bad gateway
- 504 -> gateway timeout