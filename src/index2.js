// Get the current url
//var currentUrl = window.location.href;
var currentUrl =
  "https://www.backblaze.com/docs/cloud-storage-integrate-rclone-with-backblaze-b2";
// Define a new url to open in the modal window
var newUrl = `https://content-parser.com/markdown?url=${currentUrl}`;

function doTheThing() {
  console.log("doTheThing");
  // Open the modal window with the new url
  var modalWindow = window.open(newUrl, "modal", "width=600,height=400");

  // Optionally, you can add some logic to close the modal window when the user clicks on the current window
  window.onclick = function () {
    if (modalWindow) {
      modalWindow.close();
    }
  };
}

function newOne() {
  // Get the div element by its id
  var contentDiv = document.getElementById("content");
  console.log("newOne");
  // Make a fetch request to the other website
  fetch(newUrl)
    .then(function (response) {
      var contentType = response.headers.get("Content-Type");

      // Log the Content-Type header value
      console.log(contentType);
      // Check if the response is ok
      if (response.ok) {
        // Return the response as text
        return response.text();
      } else {
        // Throw an error if the response is not ok
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(function (html) {
      // Update the div element with the HTML content
      contentDiv.innerHTML = html;
    })
    .catch(function (error) {
      // Handle the error
      console.error("FETCH ERROR:", error);
    });
}

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

button1.addEventListener("click", doTheThing);
button2.addEventListener("click", newOne);
