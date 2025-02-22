// Smart Bite: A weight management app

const users = [];

function addUser(name, age, weight, height) {
  const bmi = calculateBMI(weight, height);
  const status = getWeightStatus(bmi);
  users.push({ name, age, weight, height, bmi, status });
  return `${name}'s BMI is ${bmi} (${status})`;
}

function calculateBMI(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(1);
}

function getWeightStatus(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
  if (bmi >= 25 && bmi < 29.9) return 'Overweight';
  return 'Obese';
}

function suggestChanges(bmi) {
  if (bmi < 18.5) return 'Increase calorie intake with healthy foods.';
  if (bmi >= 18.5 && bmi < 24.9) return 'Maintain your current diet and exercise routine.';
  if (bmi >= 25) return 'Reduce calorie intake and increase physical activity.';
}

// Example usage:
console.log(addUser('Alice', 25, 55, 165)); // Normal weight
console.log(suggestChanges(20.2)); // Maintain routine
