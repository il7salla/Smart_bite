/* Global Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #F9F6F0; /* Soft beige */
    color: #333;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

/* Sidebar Styling */
#sidebar {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: -250px;
    background-color: #EED0C6;
    transition: 0.3s;
    padding-top: 50px;
    z-index: 2;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

#sidebar a {
    padding: 16px;
    text-decoration: none;
    font-size: 1.2em;
    color: #333;
    display: block;
    transition: 0.3s;
}

#sidebar a:hover {
    background-color: #D1B3A1;
    color: white;
}

#sidebar .close-btn {
    font-size: 30px;
    color: #333;
    cursor: pointer;
    padding: 20px;
}

/* Button Animation */
button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    background-color: #EED0C6;
    color: #fff;
    font-size: 1.1em;
    cursor: pointer;
    margin-top: 20px;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

button:hover {
    background-color: #D1B3A1;
    transform: scale(1.1); /* Button click animation */
}

/* Main Content */
#content {
    margin-left: 0;
    transition: margin-left 0.3s;
    padding: 20px;
    flex-grow: 1;
    overflow-y: auto;
}

/* Section Styles */
section {
    display: none;
    margin-top: 20px;
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

section.active {
    display: block;
}

/* Profile Section */
#profile-section input {
    padding: 10px;
    margin: 10px;
    border: 2px solid #EED0C6;
    border-radius: 8px;
    font-size: 1em;
    width: 80%;
}

#profile-section button {
    width: 50%;
}

/* BMI Calculator Section */
#bmi-calculator input {
    margin: 10px;
    padding: 10px;
    border: 2px solid #EED0C6;
    border-radius: 8px;
    font-size: 1em;
    width: 60%;
}

#bmi-calculator button {
    margin-top: 10px;
    background-color: #EED0C6;
}

/* Meal Log Section */
#meal-log input {
    margin: 10px;
    padding: 10px;
    border: 2px solid #EED0C6;
    border-radius: 8px;
    font-size: 1em;
    width: 80%;
}

#meal-log button {
    margin-top: 10px;
    background-color: #EED0C6;
}

/* Footer */
footer {
    position: absolute;
    bottom: 10px;
    font-size: 0.9em;
    color: #888;
}
