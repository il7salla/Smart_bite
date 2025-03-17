// Open the sidebar
function openNav() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("content").style.marginLeft = "250px"; // Adjust for sidebar width
}

// Close the sidebar
function closeNav() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("content").style.marginLeft = "0";
}

// Show specific sections on button click
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    const section = document.getElementById(sectionId);
    section.classList.add('active');
}

// Save Profile data
function saveProfile() {
    const name = document.getElementById('profile-name').value;
    const weight = document.getElementById('profile-weight').value;
    const height = document.getElementById('profile-height').value;
    alert(`Profile Saved: Name: ${name}, Weight: ${weight}kg, Height: ${height}cm`);
}

// Calculate BMI
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    if (weight && height) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
        document.getElementById('bmi-result').textContent = `Your BMI: ${bmi}`;
    } else {
        alert('Please enter both weight and height.');
    }
}

// Add protein tracker
function addProteinTracker() {
    const food = document.getElementById('food-select').value;
    const quantity = document.getElementById('quantity').value;
    if (food && quantity) {
        const listItem = document.createElement('li');
        listItem.textContent = `${food} - ${quantity} grams`;
        document.getElementById('protein-log').appendChild(listItem);
    } else {
        alert('Please select a food and enter a quantity.');
    }
}

// Add calorie tracker
function addCalorieTracker() {
    const food = document.getElementById('food-select-calorie').value;
    const quantity = document.getElementById('quantity-calorie').value;
    if (food && quantity) {
        const listItem = document.createElement('li');
        listItem.textContent = `${food} - ${quantity} grams`;
        document.getElementById('calorie-log').appendChild(listItem);
    } else {
        alert('Please select a food and enter a quantity.');
    }
}

// Log meal photo
function logMeal() {
    const photo = document.getElementById('meal-photo').files[0];
    if (photo) {
        const listItem = document.createElement('li');
        listItem.textContent = `Meal: ${photo.name}`;
        document.getElementById('meal-list').appendChild(listItem);
    } else {
        alert('Please upload a photo.');
    }
}
