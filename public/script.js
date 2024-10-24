// Function to assign random numbers to each box
function assignRandomValues() {
    // Example fetch request to retrieve the JSON data from the server
    fetch('https://first-server-klv7.onrender.com/api/generate-key') // Update the URL to match the deployed server URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        console.log('Received data:', data);
        for (let i = 1; i <= 7; i++) {
            document.getElementById(`box${i}`).textContent = data[`numero${i}`];
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

// Attach event listener to the button
document.getElementById('randomizeBtn').addEventListener('click', assignRandomValues);