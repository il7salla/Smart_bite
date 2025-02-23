import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Chart from 'chart.js/auto';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [totalProtein, setTotalProtein] = useState(parseFloat(localStorage.getItem("totalProtein")) || 0);
  const [foodList, setFoodList] = useState(JSON.parse(localStorage.getItem("foodList")) || []);
  const [totalCalories, setTotalCalories] = useState(parseFloat(localStorage.getItem("totalCalories")) || 0);
  const [calorieList, setCalorieList] = useState(JSON.parse(localStorage.getItem("calorieList")) || []);
  const proteinChartRef = useRef(null);
  let proteinChart;

  useEffect(() => {
    initProteinChart();
  }, []);

  const initProteinChart = () => {
    const ctx = proteinChartRef.current.getContext("2d");
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
        scales: { y: { beginAtZero: true } }
      }
    });
  };

  const addFood = (food, quantity) => {
    const proteinChartData = {
      'chicken': 25, 'rice': 2.5, 'eggs': 6, 'tofu': 10, 'cheese': 7, 'milk': 3.4,
      'beef': 26, 'fish': 20, 'lentils': 9, 'yogurt': 5, 'almonds': 21, 'peanuts': 26,
      'chickpeas': 19, 'burger': 12, 'pizza': 11, 'hot dog': 8, 'fried chicken': 18,
      'bacon': 37, 'sausage': 14, 'ice cream': 3, 'chocolate': 5, 'cheetos': 6,
      'doritos': 5, 'pringles': 4, 'fries': 3
    };

    let protein = proteinChartData[food] ? proteinChartData[food] * quantity : 0;

    if (!proteinChartData[food]) {
      protein = parseFloat(prompt(`Protein content for '${food}' is unknown. Enter protein per serving (in grams):`)) * quantity;
      if (isNaN(protein)) return alert("Invalid protein input.");
    }

    const newTotal = totalProtein + protein;
    const newList = [...foodList, `${food} - ${protein}g protein`];

    setTotalProtein(newTotal);
    setFoodList(newList);
    localStorage.setItem("totalProtein", newTotal);
    localStorage.setItem("foodList", JSON.stringify(newList));

    updateProteinChart(protein);
  };

  const updateProteinChart = (protein) => {
    const today = new Date().toLocaleDateString();
    const index = proteinChart.data.labels.indexOf(today);

    if (index === -1) {
      proteinChart.data.labels.push(today);
      proteinChart.data.datasets[0].data.push(protein);
    } else {
      proteinChart.data.datasets[0].data[index] += protein;
    }

    proteinChart.update();
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4 text-lg font-bold">Smart Bite</div>
        <Button className="w-full mb-2" onClick={() => setIsSidebarOpen(false)}>Close</Button>
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">BMI Calculator</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Protein Tracker</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Meal Log</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">User Profile</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Button className="m-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? 'Hide Menu' : 'Show Menu'}
        </Button>
        <div className="p-4">
          <Card>
            <CardContent>
              <h1 className="text-2xl font-bold">Welcome to Smart Bite!</h1>
              <p className="mt-2">Track your meals, protein, and more.</p>
              <canvas ref={proteinChartRef}></canvas>
              <p className="mt-4">Total Protein: {totalProtein}g</p>
              <ul>
                {foodList.map((item, index) => (<li key={index}>{item}</li>))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
