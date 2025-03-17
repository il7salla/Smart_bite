let currentView = "bmi-calculator";

// Food data for protein and calorie tracking
let proteinData = {
  labels: [
    "Chicken", "Rice", "Eggs", "Tofu", "Cheese", "Milk", "Beef", "Fish", "Lentils", "Yogurt",
    "Almond", "Peanuts", "Chickpeas", "Burger", "Pizza", "Hotdog", "Fried Chicken", "Bacon",
    "Sausage", "Ice Cream", "Chocolate", "Cheetos", "Doritos", "Pringles", "Fries", "Naan",
    "Samosa", "Falafel", "Hummus", "Curry", "Sushi", "Dumplings", "Pasta", "Tortilla", 
    "Instant Noodles", "Ramen", "Spaghetti", "Mac and Cheese", "Coke", "Orange Juice", 
    "Milkshake", "Protein Shake", "Energy Drink", "Shawarma", "Kebab", "Biryani", "Miso Soup", 
    "Pad Thai", "Salad", "Quinoa", "Avocado Toast", "Granola", "Oatmeal", "Fruit Bowl", 
    "Green Smoothie", "Matcha Latte", "Bubble Tea"
  ],
  datasets: [{
    label: "Protein (g)",
    data: [
      25, 4, 6, 10, 7, 8, 20, 22, 9, 8, 6, 8, 9, 26, 12, 22, 21, 15, 15, 2, 2, 1, 1, 3, 
      5, 10, 5, 7, 10, 8, 12, 5, 5, 10, 8, 0, 0, 8, 20, 15, 15, 13, 7, 6, 2, 10, 5, 10, 6
    ],
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 1
  }]
};

let calorieData = {
  labels: [
    "Chicken", "Rice", "Eggs", "Tofu", "Cheese", "Milk", "Beef", "Fish", "Lentils", "Yogurt",
    "Almond", "Peanuts", "Chickpeas", "Burger", "Pizza", "Hotdog", "Fried Chicken", "Bacon",
    "Sausage", "Ice Cream", "Chocolate", "Cheetos", "Doritos", "Pringles", "Fries", "Naan",
    "Samosa", "Falafel", "Hummus", "Curry", "Sushi", "Dumplings", "Pasta", "Tortilla", 
    "Instant Noodles", "Ramen", "Spaghetti", "Mac and Cheese", "Coke", "Orange Juice", 
    "Milkshake", "Protein Shake", "Energy Drink", "Shawarma", "Kebab", "Biryani", "Miso Soup", 
    "Pad Thai", "Salad", "Quinoa", "Avocado Toast", "Granola", "Oatmeal", "Fruit Bowl", 
    "Green Smoothie", "Matcha Latte", "Bubble Tea"
  ],
  datasets: [{
    label: "Calories",
    data: [
      200, 130, 70, 100, 120, 150, 250, 180, 120, 90, 160, 180, 150, 350, 300, 250, 350, 400,
      250, 200, 250, 160, 180, 170, 230, 200, 300, 250, 160, 180, 250, 350, 100, 120, 200, 230,
      150, 100, 70, 160, 220, 150, 200, 270, 300, 300, 400, 120, 150, 100, 160, 200
    ],
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1
  }]
};

const bmiCalculator = document.getElementById("bmi-calculator");
const proteinTracker = document.getElementById("protein-tracker");
const calorieTracker = document.getElementById("calorie-tracker");
const mealLog = document.getElementById("meal-log");
const profileSection = document.getElementById("profile");
const proteinChart = document.getElementById("proteinChart").getContext("2d");
const calorieChart = document.getElementById("calorieChart").getContext("2d");

let proteinChartInstance = new Chart(proteinChart, {
  type: "bar",
  data: proteinData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let calorieChartInstance = new Chart(calorieChart, {
  type: "bar",
  data: calorieData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Show the section based on button clicked
document.getElementById("bmi-btn").addEventListener("click", () => {
  switchView("bmi-calculator");
});

document.getElementById("protein-btn").addEventListener("click", () => {
  switchView("protein-tracker");
});

document.getElementById("calories-btn").addEventListener("click", () => {
  switchView("calorie-tracker");
});

document.getElementById("meal-log-btn").addEventListener("click", () => {
  switchView("meal-log");
});

document.getElementById("profile-btn").addEventListener("click", () => {
  switchView("profile");
});

function switchView(view) {
  document.getElementById(currentView).style.display = "none";
  document.getElementById(view).style.display = "block";
  currentView = view;
}

function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to m

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  let bmi = weight / (height * height);
  let result = "";

  if (bmi < 18.5) {
    result = `Underweight (BMI: ${bmi.toFixed(2)})`;
  } else if (bmi < 24.9) {
    result = `Normal weight (BMI: ${bmi.toFixed(2)})`;
  } else if (bmi < 29.9) {
    result = `Overweight (BMI: ${bmi.toFixed(2)})`;
  } else {
    result = `Obesity (BMI: ${bmi.toFixed(2)})`;
  }

  document.getElementById("bmi-result").innerText = result;
}

function addProtein() {
  let foodName = document.getElementById("food-name").value;
  let proteinAmount = parseFloat(document.getElementById("protein-amount").value);
  let caloriesAmount = parseFloat(document.getElementById("calories-amount").value);
  let quantity = parseInt(document.getElementById("quantity").value);

  if (!foodName || isNaN(proteinAmount) || isNaN(caloriesAmount) || isNaN(quantity)) {
    alert("Please fill all fields.");
    return;
  }

  // Add the food and its quantity to the chart data
  proteinData.labels.push(foodName);
  proteinData.datasets[0].data.push(proteinAmount * quantity);
  calorieData.labels.push(foodName);
  calorieData.datasets[0].data.push(caloriesAmount * quantity);

  proteinChartInstance.update();
  calorieChartInstance.update();
}

function addCalories() {
  let foodName = document.getElementById("food-name-calories").value;
  let caloriesValue = parseFloat(document.getElementById("calories-value").value);
  let quantity = parseInt(document.getElementById("quantity-calories").value);

  if (!foodName || isNaN(caloriesValue) || isNaN(quantity)) {
    alert("Please fill all fields.");
    return;
  }

  // Add the food and its quantity to the calorie data
  calorieData.labels.push(foodName);
  calorieData.datasets[0].data.push(caloriesValue * quantity);

  calorieChartInstance.update();
}

function logMeal() {
  let file = document.getElementById("meal-photo").files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function(event) {
      let imgElement = document.createElement("img");
      imgElement.src = event.target.result;

      let li = document.createElement("li");
      li.appendChild(imgElement);
      document.getElementById("meal-list").appendChild(li);
    };
    reader.readAsDataURL(file);
  }
}

function saveProfile() {
  let name = document.getElementById("profile-name").value;
  let weight = document.getElementById("profile-weight").value;
  let height = document.getElementById("profile-height").value;

  if (!name || !weight || !height) {
    alert("Please fill all profile fields.");
    return;
  }

  // Save profile data to localStorage
  localStorage.setItem("profile", JSON.stringify({ name, weight, height }));

  document.getElementById("profile-info").innerText = `Name: ${name}, Weight: ${weight}kg, Height: ${height}cm`;
}

function loadProfile() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  if (profile) {
    document.getElementById("profile-name").value = profile.name;
    document.getElementById("profile-weight").value = profile.weight;
    document.getElementById("profile-height").value = profile.height;
    document.getElementById("profile-info").innerText = `Name: ${profile.name}, Weight: ${profile.weight}kg, Height: ${profile.height}cm`;
  }
}

window.onload = loadProfile;
