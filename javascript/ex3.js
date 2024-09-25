Q1
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Create and Append Div</title>
// </head>
// <body>
//     <script>
//         function createAndAppendDiv() {
//             // Create a new div element
//             const newDiv = document.createElement("div");

//             // Set a unique id for the div
//             newDiv.id = "uniqueDiv";

//             // Create a text node with some content
//             const textContent = document.createTextNode("This is a dynamically created div!");

//             // Append the text to the div
//             newDiv.appendChild(textContent);

//             // Append the div to the body
//             document.body.appendChild(newDiv);
//         }

//         // Call the function to append the div
//         createAndAppendDiv();
//     </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html>
// <head>
//     <title>Change Background Color</title>
// </head>
// <body>
//     <p>This is paragraph 1.</p>
//     <p>This is paragraph 2.</p>
//     <button onclick="changeBackgroundColor()">Change Background Color</button>

//     <script>
//         function changeBackgroundColor() {
//             // Get all <p> elements
//             const paragraphs = document.getElementsByTagName("p");

//             // Loop through each <p> element and change its background color
//             for (let i = 0; i < paragraphs.length; i++) {
//                 paragraphs[i].style.backgroundColor = "blue";
//             }
//         }
//     </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html>
// <head>
//     <title>Form Validation</title>
// </head>
// <body>
//     <form id="nameForm">
//         <label for="name">Enter your name:</label>
//         <input type="text" id="name" name="name">
//         <button type="submit">Submit</button>
//         <p id="errorMessage" style="color:red;"></p>
//     </form>

//     <script>
//         document.getElementById("nameForm").addEventListener("submit", function(event) {
//             // Get the input value
//             const nameInput = document.getElementById("name").value;

//             // If the input is empty, prevent form submission and show an error message
//             if (nameInput === "") {
//                 event.preventDefault();
//                 document.getElementById("errorMessage").textContent = "Name cannot be empty!";
//             }
//         });
//     </script>
// </body>
// </html>

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Dynamic List</title>
// </head>
// <body>
//     <input type="text" id="listItem" placeholder="Enter item">
//     <button onclick="addItem()">Add</button>

//     <ul id="itemList">
//     </ul>

//     <script>
//         function addItem() {
//             // Get the input value
//             const itemValue = document.getElementById("listItem").value;

//             // Create a new list item
//             const newItem = document.createElement("li");

//             // Set the text of the new list item
//             newItem.textContent = itemValue;

//             // Append the list item to the unordered list
//             document.getElementById("itemList").appendChild(newItem);

//             // Clear the input field after adding
//             document.getElementById("listItem").value = "";
//         }
//     </script>
// </body>
// </html>

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Toggle Visibility</title>
// </head>
// <body>
//     <img id="toggleImage" src="https://via.placeholder.com/150" alt="Sample Image">
//     <button onclick="toggleImageVisibility()">Toggle Image Visibility</button>

//     <script>
//         function toggleImageVisibility() {
//             // Get the image element
//             const image = document.getElementById("toggleImage");

//             // Check the current display value and toggle it
//             if (image.style.display === "none") {
//                 image.style.display = "block";
//             } else {
//                 image.style.display = "none";
//             }
//         }
//     </script>
// </body>
// </html>
