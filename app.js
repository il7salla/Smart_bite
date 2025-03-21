// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// Show Pages
function showPage(pageId) {
    const sections = document.querySelectorAll('#content section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// Profile Management
function saveProfile() {
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    localStorage.setItem('profile', JSON.stringify({ name, weight, height }));
    alert('Profile saved!');
}

function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    if (profile) {
        document.getElementById('name').value = profile.name;
        document.getElementById('weight').value = profile.weight;
        document.getElementById('height').value = profile.height;
    }
}

// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (!weight || !height) {
        alert('Please fill in your profile first!');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let result = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) result += "You are underweight.";
    else if (bmi < 24.9) result += "You are normal weight.";
    else if (bmi < 29.9) result += "You are overweight.";
    else result += "You are obese.";

    document.getElementById('bmi-result').textContent = result;
}

window.onload = loadProfile;
