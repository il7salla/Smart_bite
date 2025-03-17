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
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Show the clicked section
    const section = document.getElementById(sectionId);
    section.classList.add('active');
}

// Food data (protein and calories per 100g for each food item)
const foodData = {
    chicken: { protein: 31, calories: 165 },
    rice: { protein: 2.7, calories: 130 },
    eggs: { protein: 13, calories: 155 },
    tofu: { protein: 8, calories: 76 },
    cheese: { protein: 25, calories: 402 },
    milk: { protein: 3.4, calories: 42 },
    beef: { protein: 26, calories: 250 },
    fish: { protein: 20, calories: 120 },
    lentils: { protein: 9, calories: 116 },
    yogurt: { protein: 10, calories: 59 },
    almonds: { protein: 21, calories: 579 },
    peanuts: { protein: 25, calories: 567 },
    chickpeas: { protein: 8.9, calories: 164 },
    burger: { protein: 25, calories: 250 },
    pizza: { protein: 11, calories: 285 },
    hotdog: { protein: 12, calories: 150 },
    friedChicken: { protein: 20, calories: 400 },
    bacon: { protein: 12, calories: 500 },
    sausage: { protein: 12, calories: 200 },
    iceCream: { protein: 4, calories: 207 },
    chocolate: { protein: 7.6, calories: 546 },
    cheetos: { protein: 6, calories: 150 },
    doritos: { protein: 5, calories: 140 },
    pringles: { protein: 5, calories: 150 },
    fries: { protein: 3.4, calories: 312 },
    naan: { protein: 6.2, calories: 289 },
    samosa: { protein: 4, calories: 140 },
    falafel: { protein: 13, calories: 200 },
    hummus: { protein: 8, calories: 160 },
    curry: { protein: 10, calories: 230 },
    sushi: { protein: 14, calories: 200 },
    dumplings: { protein: 11, calories: 150 },
    pasta: { protein: 5, calories: 130 },
    tortilla: { protein: 6, calories: 150 },
    instantNoodles: { protein: 5, calories: 320 },
    ramen: { protein: 10, calories: 400 },
    spaghetti: { protein: 7, calories: 130 },
    macAndCheese: { protein: 10, calories: 350 },
    coke: { protein: 0, calories: 140 },
    orangeJuice: { protein: 1, calories: 45 },
    milkshake: { protein: 7, calories: 250 },
