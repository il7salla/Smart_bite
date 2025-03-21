document.addEventListener("DOMContentLoaded", function () {
    console.log("Smart Bite app initialized!");
    loadUserProfile();
    loadProteinData();
    loadMealHistory();
    loadCalorieData();
    initProteinChart();

    // Sidebar Toggle
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
    const toggleSidebarBtn = document.getElementById("toggleSidebar");

    toggleSidebarBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        content.classList.toggle("shifted");
    });

    // Swipe Detection
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX < touchEndX - 50) sidebar.classList.add("active");
        if (touchStartX > touchEndX + 50) sidebar.classList.remove("active");
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

// BMI Calculator
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
function addFood() {
    let food = document.getElementById("food").value.trim().toLowerCase();
    let quantity = parseFloat(document.getElementById("quantity").value);

    if (!food || isNaN(quantity) || quantity <= 0) {
        alert("Enter valid food and quantity.");
        return;
    }

    totalProtein += quantity * 10;  // Example calculation
    document.getElementById("totalProtein").innerText = `Total Protein: ${totalProtein}g`;
}
