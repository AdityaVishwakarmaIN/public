// This function removes the contextmenu event handler from an element
function enableRightClick (el) {
  el || (el = document); // If no element is provided, use the document
  el.addEventListener ("contextmenu", bringBackDefault, true); // Add a listener to restore the default behavior
}

// This function restores the default contextmenu behavior
function bringBackDefault (event) {
  event.returnValue = true; // Allow the event
  event.stopPropagation && event.stopPropagation (); // Stop the event from bubbling up
  event.cancelBubble && event.cancelBubble (); // For older browsers
}

// Call the function on the document or any element you want
enableRightClick ();
