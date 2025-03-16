document.getElementById('birthDataForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent form submission

  // Get user input
  const birthDate = document.getElementById('birthDate').value;
  const birthTime = document.getElementById('birthTime').value;
  const birthLocation = document.getElementById('birthLocation').value;

  // Validate input
  if (!birthDate || !birthTime || !birthLocation) {
    alert('Please fill in all fields.');
    return;
  }

  // Check if date is valid
  if (isNaN(Date.parse(birthDate))) {
    alert('Please enter a valid date.');
    return;
  }

  try {
    // Mock data for testing (replace with API call)
    const mockPlanetaryData = [
      { name: 'Sun', position: 10 },
      { name: 'Moon', position: 120 },
      { name: 'Mercury', position: 45 },
      { name: 'Venus', position: 30 },
      { name: 'Mars', position: 90 },
    ];

    const mockInterpretations = [
      { planet: 'Sun', text: 'The Sun represents your core self and ego.' },
      { planet: 'Moon', text: 'The Moon governs your emotions and inner world.' },
      { planet: 'Mercury', text: 'Mercury influences communication and intellect.' },
      { planet: 'Venus', text: 'Venus rules love and relationships.' },
      { planet: 'Mars', text: 'Mars drives your energy and ambition.' },
    ];

    // Render chart
    renderChart(mockPlanetaryData);

    // Display interpretations
    displayInterpretations(mockInterpretations);
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});

// Function to render the birth chart
function renderChart(planetaryData) {
  const ctx = document.getElementById('birthChart').getContext('2d');
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: planetaryData.map(planet => planet.name),
      datasets: [{
        label: 'Planetary Positions',
        data: planetaryData.map(planet => planet.position),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  });
}

// Function to display interpretations
function displayInterpretations(interpretations) {
  const interpretationList = document.getElementById('interpretationList');
  interpretationList.innerHTML = '';

  interpretations.forEach(interpretation => {
    const li = document.createElement('li');
    li.textContent = `${interpretation.planet}: ${interpretation.text}`;
    interpretationList.appendChild(li);
  });
}