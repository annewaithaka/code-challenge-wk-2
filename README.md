Shopping List Application
This is a web application for creating a shopping list. It allows users to add items to a list, mark completed items, and clear the entire list.

Technologies Used
HTML
CSS
JavaScript

Features
Add Items: Enter an item into the input field. Click > "Add Item" to add it to the shopping list.
Mark Completed: Click on an item in the list to mark it as completed. A checkmark '✓' will appear next to completed items.
Clear List: Click > "Clear List" button to remove all items from the shopping list.

File Structure
index.html: HTML file that contains the structure of the shopping list interface.
index.css: CSS file that styles the elements of the shopping list interface.
index.js: JavaScript file that provides functionality to the shopping list application, including adding items, marking items as completed, and clearing the list.

Usage
Clone the repository to your local machine.
Open index.html in a web browser to use the shopping list application.

How It Works
Rendering the List: The renderShoppingList function renders the items in the shoppingList array dynamically onto the page.
Adding Items: When the user submits the form (shoppingForm), the form event listener adds the new item to the shoppingList array, clears the input field, and then re-renders the updated list.
Marking Completed: Clicking on a list item gives it a completed status and updates the appearance of the item with a checkmark.
Clearing the List: Clicking the "Clear List" button empties the shoppingList array and re-renders an empty list.

This README provides an overview of the shopping list application, its features, file structure, usage instructions, and how the key functionalities are implemented in JavaScript.
