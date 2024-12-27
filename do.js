const SEARCH_ENDPOINT = 'https://example.com/search';
const queryString = 'your=query&params=here'; // Replace with your actual query string parameters

// Construct the full URL
const url = `${SEARCH_ENDPOINT}?${queryString}`;

// Make the fetch request
fetch(url, {
    method: 'GET', // or 'POST', 'PUT', etc. depending on your API
    headers: {
        'Content-Type': 'application/json', // adjust as needed
        // Add any other headers if required
    },
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // parse JSON response
})
.then(data => {
    // Handle data received from the server
    console.log(data);
})
.catch(error => {
    // Handle errors during fetch
    console.error('Error fetching data:', error);
});
