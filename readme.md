## Answer N0 - (1)

### The difference between getElementById,getElementsByClassName and querySelector / querySelectorAll is:


---


 ### 1. getElementById:

 It selects a single element by Its `id` and it returns a single DOM element or `null` if no element matches and we shouldn't select multiple elements with the same ID.
 That's how it works :

<div id="header">Hello</div>

<script>
    const headerText = document.getElementById("header");
console.log(header.textContent); // "Hello"
</script>



### 2. getElementClassName:

It selects all the elements that have a specific class and it returns a live HtmlCollection of elements and we can use multiple elements at once. it's not an array,but it look like array,thats why we can loop with `for` or  `for of` .

That's how it works :

<div class="item">Hi</div>
<div class="item">Hello</div>


<script>
const items = document.getElementsByClassName("item");
console.log(items.length); // 2
for (let item of items) {
  console.log(item.textContent); // "Hi"  "hello"
}

</script>



### (3) & (4) querySelector and querySelectorAll:

Both of them are used to select elements in CSS selectors. first one returns the first matching element or `null` and second one returns a static NodeList of all matches.
they both are very flesible because they support any selector. for example :
IDs (#id), classes (.class), tags(div) etc.
That's how it works :


<div class="item">Hi</div>
<div class="item">Hello</div>


<script>
const firstItem = document.querySelector(".item"); // it will select the first element with class "item"
const allItems = document.querySelectorAll(".item"); // it will select all the elements with class "item"
</script>


---


## Answer N0 - (2)

 ### how I create and insert a new element into the DOM:


First of all i create a new element using `document.createElement()` in javascript.then i add content / attributes in it.then i call the parent where i want to add the new element and then i append the new element into the parent.
for example : 


<script>
const newDiv = document.createElement("div"); // Creates a new div element
newDiv.textContent = "Hello, I am a new div!"; // Sets the text content of the div
newDiv.classList.add("box"); // Adds class "box" to the div
newDiv.setAttribute("id", "myDiv"); // Sets id="myDiv" to the div
const parentElement = document.body; // Selects the body as the parent
parentElement.appendChild(newDiv); // Appends the new div to the body
</script>



--- 


## Answer N0 - (3) 

### Event Bubbling :


event bubbling is a type of event propagation where the event starts from the deepest target element and then bubbles up to its parent elements. For example, if you click on a button inside a div, the click event will first be handled by the button, then by the div, and so on up to the document root. This allows parent elements to respond to events that occur on their child elements.
For example :

 <div id="parent_div">
     parent div 
     <button id="child_btn">
         Click Me
     </button>
    </div>

<script>
  document.getElementById("child_btn").addEventListener("click", function(event) {
    console.log("Child button clicked"); 
  });

  document.getElementById("parent_div").addEventListener("click", function() {
    console.log("Parent div clicked");
  });

  document.body.addEventListener("click", function() {
    console.log("Body clicked");
  });
</script>


In this example, if we click on the button, the console will log:
"Child button clicked"
"Parent div clicked"
"Body clicked"
demonstrating event bubbling from the button to the body.




---




## Answer N0 - (4)

### Event Delegation is:


  Event delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for its child elements. Instead of attaching individual event listeners to each child element, the parent element listens for events that bubble up from its children. This approach is efficient and reduces memory usage, especially when dealing with a large number of child elements or dynamically added elements.

  It is useful for fewer event listeners and less memory and faster execution and it produces one handler clean code instead of many.


  ---

  


 ## Answer No - (5)


 ### difference between preventDefault() and stopPropagation():


 event.preventDefault() Stops the browser's default action like form submit and link navigation.It's used to prevent the default action of an event from being triggered. for example, if i have a link and i want to prevent it from navigating to a new page when clicked, I can use event.preventDefault() in the click event handler. 


stopPropagation() method used to stop the propagation of an event from bubbling up or capturing down the DOM tree. When an event is triggered on an element, it first goes through the capturing phase (from the root to the target element) and then the bubbling phase (from the target element back up to the root). By calling stopPropagation() on an event object, I can prevent the event from propagating further in either direction. 


that's the difference between stopPropagation() and event.preventDefault().
