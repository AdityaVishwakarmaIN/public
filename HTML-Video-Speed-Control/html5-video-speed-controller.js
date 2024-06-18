function executeCode() {
	// Check if the box element already exists
	const existingBoxElement = document.querySelector('.playback-speed-box');
	if (!existingBoxElement) {
	  // Create the black box element
	  const boxElement = document.createElement('div');
	  boxElement.classList.add('playback-speed-box');
	  boxElement.style.position = 'absolute';
	  boxElement.style.top = '10px'; // Adjust the top position as needed
	  boxElement.style.left = '10px'; // Adjust the left position as needed
	  boxElement.style.backgroundColor = 'black';
	  boxElement.style.opacity = '0.5';
	  boxElement.style.padding = '2px';
	  boxElement.style.color = 'white';
	  boxElement.style.fontSize = '12px';
	  boxElement.style.zIndex = '9999'; // Ensure the box is on top of other elements

	  // Attach the box element to the video element
	  const videoElement = document.querySelector('video'); // Change the selector according to your video element
	  if (videoElement) {
		videoElement.style.position = 'relative';
		videoElement.style.display = 'inline-block';
		videoElement.parentNode.insertBefore(boxElement, videoElement);

		// Update the box element with the current playback speed rounded to 2 decimal places
		function updatePlaybackSpeedBox() {
		  boxElement.textContent = 'Speed: ' + videoElement.playbackRate.toFixed(2);
		}

		// Update the box element initially and whenever the playback speed changes
		updatePlaybackSpeedBox();
		videoElement.addEventListener('ratechange', updatePlaybackSpeedBox);

		// Create a function to handle the key press event
		function handleKeyPress(event) {
		  if (event.key === 'd') {
			// Increase play speed by 0.25 (maximum 16)
			videoElement.playbackRate = Math.min(videoElement.playbackRate + 0.25, 16);
		  } else if (event.key === 's') {
			// Decrease play speed by 0.25 (minimum 0.25)
			videoElement.playbackRate = Math.max(videoElement.playbackRate - 0.25, 0.25);
		  } else if (event.key === 'r') {
			// Reset play speed to 1
			videoElement.playbackRate = 1;
		  } else if (event.key === 'x') {
			// Skip video forward by 5 seconds
			videoElement.currentTime += 5;
		  } else if (event.key === 'z') {
			// Skip video backward by 5 seconds
			videoElement.currentTime = Math.max(videoElement.currentTime - 5, 0);
		  }
		}

		// Attach the event listener to the document
		document.addEventListener('keydown', handleKeyPress);
	  }
	}
}

// Create a MutationObserver to observe changes in the DOM
const observer = new MutationObserver(executeCode);

// Observe changes in the document body and subtree
observer.observe(document.body, { childList: true, subtree: true });

// Execute the code immediately
executeCode();
