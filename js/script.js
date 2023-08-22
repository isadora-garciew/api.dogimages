let dogimg = document.getElementById('dogimg');

function base() {
    fetch('https://random.dog/woof.json') // Using the correct endpoint for random images
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.url.endsWith('.jpg') || data.url.endsWith('.png')) {
                dogimg.src = data.url;
            } else {
                base(); // If the fetched URL is not an image, try again
            }
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}

document.addEventListener('keydown', (event) => {
    base();
});
