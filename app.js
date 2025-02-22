document.addEventListener("DOMContentLoaded", function () {
    console.log("Smart Bite app initialized!");
    loadUserProfile();
    loadProteinData();
    loadMealHistory();
    loadCalorieData();
    initProteinChart();

    // Button Click Listener (for testing purposes)
    document.getElementById("submitButton").addEventListener("click", function() {
        alert("Button clicked!");
    });
});

// Section Navigation
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// User Profile Management
function saveUserProfile() {
    const profile = {
        name: document.getElementById("userName").value,
        age: document.getElementById("userAge").value,
        weight: document.getElementById("userWeight").value,
        height: document.getElementById("userHeight").value,
        goals: document.getElementById("dietaryGoals").value
    };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    document.getElementById("profileSavedMsg").innerText = "Profile Saved!";
}

function loadUserProfile() {
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    if (profile) {
        document.getElementById("userName").value = profile.name;
        document.getElementById("userAge").value = profile.age;
        document.getElementById("userWeight").value = profile.weight;
        document.getElementById("userHeight").value = profile.height;
        document.getElementById("dietaryGoals").value = profile.goals;
    }
}

// BMI Calculator Function
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById("bmiResult").innerText = "Please enter valid numbers!";
        return;
    }

    let bmi = weight / (height ** 2);
    let category = bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal weight" : "Overweight";
    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}

// Protein Tracker
let totalProtein = parseFloat(localStorage.getItem("totalProtein")) || 0;
let foodList = JSON.parse(localStorage.getItem("foodList")) || [];
let proteinChart;

const proteinChartData = {
    'chicken': 25, 'rice': 2.5, 'eggs': 6, 'tofu': 10, 'cheese': 7, 'milk': 3.4, 
    'beef': 26, 'fish': 20, 'lentils': 9, 'yogurt': 5, 'almonds': 21, 'peanuts': 26, 
    'chickpeas': 19, 'burger': 12, 'pizza': 11, 'hot dog': 8, 'fried chicken': 18, 
    'bacon': 37, 'sausage': 14, 'ice cream': 3, 'chocolate': 5, 'cheetos': 6, 
    'doritos': 5, 'pringles': 4, 'fries': 3
};

function addFood() {
    let food = document.getElementById("food").value.trim().toLowerCase();
    let quantity = parseFloat(document.getElementById("quantity").value);

    if (!food || isNaN(quantity) || quantity <= 0) {
        alert("Enter valid food and quantity.");
        return;
    }

    let protein = proteinChartData[food] ? proteinChartData[food] * quantity : 0;

    // If food is not found in chart, prompt user
    if (!proteinChartData[food]) {
        protein = parseFloat(prompt(`Protein content for '${food}' is unknown. Enter protein per serving (in grams):`));
        if (isNaN(protein)) {
            alert("Invalid protein input.");
            return;
        }
        protein *= quantity;
    }

    totalProtein += protein;

    let entry = `${food} - ${protein}g protein at ${new Date().toLocaleTimeString()}`;
    foodList.push(entry);
    localStorage.setItem("totalProtein", totalProtein);
    localStorage.setItem("foodList", JSON.stringify(foodList));

    updateProteinUI();
    updateProteinChart(protein);
}

function updateProteinUI() {
    document.getElementById("totalProtein").innerText = `Total Protein: ${totalProtein}g`;
    let foodListElement = document.getElementById("foodList");
    foodListElement.innerHTML = "";
    foodList.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        foodListElement.appendChild(li);
    });
}

function initProteinChart() {
    const ctx = document.getElementById("proteinChart").getContext("2d");
    proteinChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Daily Protein (g)',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function updateProteinChart(protein) {
    const today = new Date().toLocaleDateString();
    const index = proteinChart.data.labels.indexOf(today);

    if (index === -1) {
        proteinChart.data.labels.push(today);
        proteinChart.data.datasets[0].data.push(protein);
    } else {
        proteinChart.data.datasets[0].data[index] += protein;
    }

    proteinChart.update();
}

// Meal Log (Photo Uploads)
let mealHistory = JSON.parse(localStorage.getItem("mealHistory")) || [];

document.getElementById("photoUpload").addEventListener("change", function (e) {
    const uploadedPhoto = URL.createObjectURL(e.target.files[0]);
    document.getElementById("latestPhoto").src = uploadedPhoto;

    let newEntry = {
        time: new Date().toLocaleString(),
        photo: uploadedPhoto
    };

    mealHistory.unshift(newEntry);
    localStorage.setItem("mealHistory", JSON.stringify(mealHistory));

    loadMealHistory();
});

function loadMealHistory() {
    const historyContainer = document.getElementById("photoHistory");
    historyContainer.innerHTML = "";
    mealHistory.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${item.time}</p><img src="${item.photo}" alt="Meal Photo">`;
        historyContainer.appendChild(div);
    });
}

// Calorie Tracker
let totalCalories = parseFloat(localStorage.getItem("totalCalories")) || 0;
let calorieList = JSON.parse(localStorage.getItem("calorieList")) || [];

function addCalorie() {
    let food = document.getElementById("calorieFood").value.trim();
    let calories = parseFloat(document.getElementById("calories").value);

    if (!food || isNaN(calories) || calories <= 0) {
        alert("Enter valid food and calorie amount.");
        return;
    }

    totalCalories += calories;
    let entry = `${food}: ${calories} kcal`;
    calorieList.push(entry);
    localStorage.setItem("totalCalories", totalCalories);
    localStorage.setItem("calorieList", JSON.stringify(calorieList));

    updateCalorieUI();
}

function updateCalorieUI() {
    document.getElementById("totalCalories").innerText = `Total Calories: ${totalCalories} kcal`;
    let calorieListElement = document.getElementById("calorieList");
    calorieListElement.innerHTML = "";
    calorieList.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        calorieListElement.appendChild(li);
    });
}

function loadCalorieData() {
    updateCalorieUI();
}
