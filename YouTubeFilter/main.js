// Select all the text elements on the page
const textElements = document.querySelectorAll('*');

// Initialize a counter variable
let sheldonCount = 0;

// Loop through the text elements
for (const element of textElements) {
  // Get the text content of the current element
  const text = element.textContent;

  // Check how many times the word "Sheldon" appears in the text
  const matches = text.match(/Sheldon/gi);

  // If there are any matches, increment the counter
  if (matches) {
    sheldonCount += matches.length;
  }
}

// Log the number of times "Sheldon" appears on the screen
console.log(`The word "Sheldon" appears ${sheldonCount} times on the screen.`);
