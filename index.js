// Initialize shopping list array
let shoppingList = [];
console.log ("shoppingList");


// DOM elements
const form = document.getElementById('shoppingForm');
const itemInput = document.getElementById('itemInput');
const shoppingListUl = document.getElementById('shoppingList');
const clearBtn = document.getElementById('clearBtn');

// Function to render shopping list
function renderShoppingList() {
    // Clear existing list
    shoppingListUl.innerHTML = '';

    // Render each item in the shopping list array
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.classList.toggle('completed', item.completed);

        // Add event listener to mark item as purchased
        li.addEventListener('click', () => {
            item.completed = !item.completed;
            renderShoppingList();
        });

        shoppingListUl.appendChild(li);
    });
}

// Function to handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItemName = itemInput.value.trim();

    if (newItemName !== '') {
        // Add new item to shopping list array
        shoppingList.push({ name: newItemName, completed: false });
        itemInput.value = ''; // Clear input field
        renderShoppingList(); // Render updated shopping list
    }
});

// Function to handle clear list button click
clearBtn.addEventListener('click', () => {
    shoppingList = []; // Clear the shopping list array
    renderShoppingList(); // Render empty shopping list
});

