var index = 0;
var images = ["fillerimage.jpg", "fillerimage.jpg", "fillerimage.jpg", "fillerimage.jpg"]; // Add the paths of your images here.
var urls = ["thank you for your patience.jpg", "thank you for your patience.jpg", "thank you for your patience.jpg", "thank you for your patience.jpg"]; // Add the URLs of your projects here.
var titles = ["Project 1", "Project 2", "Project 3", "Project 4"]; // Add the titles of your projects here.

setInterval(changeImageAndUrl, 5000); // Change image and URL every 5000 milliseconds = 5 seconds

function changeImageAndUrl() {
    index = (index + 1) % images.length; // This ensures we cycle back to the first image and URL when we've gone through all of them
    document.getElementById('slideshowImage').src = images[index];
    document.getElementById('slideshowLink').href = urls[index];
    document.getElementById('projectTitle').textContent = titles[index];
}
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', function() {
    index = (index - 1 + images.length) % images.length; // This ensures we cycle back to the last image and URL when we're at the first one
    changeImageAndUrl();
});

nextButton.addEventListener('click', function() {
    index = (index + 1) % images.length; // This ensures we cycle back to the first image and URL when we've gone through all of them
    changeImageAndUrl();
});

function changeImageAndUrl() {
    document.getElementById('slideshowImage').src = images[index];
    document.getElementById('slideshowLink').href = urls[index];
    document.getElementById('projectTitle').textContent = titles[index];
}
