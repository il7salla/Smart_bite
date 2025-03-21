const knownFoods = [
    "Chicken", "Rice", "Eggs", "Tofu", "Cheese", "Milk", "Beef", "Fish", "Lentils", "Yogurt",
    "Almond", "Peanuts", "Chickpeas", "Burger", "Pizza", "Hotdog", "Fried Chicken", "Bacon",
    "Sausage", "Ice Cream", "Chocolate", "Cheetos", "Doritos", "Pringles", "Fries", "Naan",
    "Samosa", "Falafel", "Hummus", "Curry", "Sushi", "Dumplings", "Pasta", "Tortilla",
    "Instant Noodles", "Ramen", "Spaghetti", "Mac and Cheese", "Coke", "Orange Juice",
    "Milkshake", "Protein Shake", "Energy Drink", "Shawarma", "Kebab", "Biryani",
    "Miso Soup", "Pad Thai", "Salad", "Quinoa", "Avocado Toast", "Granola", "Oatmeal",
    "Fruit Bowl", "Green Smoothie", "Matcha Latte", "Bubble Tea"
];

// Autocomplete Function
function autocomplete(inputId) {
    const input = document.getElementById(inputId);
    input.addEventListener('input', function () {
        const match = knownFoods.find(food => food.toLowerCase().includes(input.value.toLowerCase()));
        if (match) input.value = match;
        else alert("Food not recognized. Please enter its details manually.");
    });
}

autocomplete('food-input');
autocomplete('food-input-calorie');
