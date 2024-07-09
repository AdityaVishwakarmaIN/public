//included error tolerance
function hideVideosWithTerm(searchTerm) {
  // Convert the search term to lowercase for case-insensitive comparison
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // Select all video items
  const videoItems = document.querySelectorAll('ytd-rich-item-renderer');

  videoItems.forEach(item => {
    // Extract the video title and convert it to lowercase
    const videoTitleElement = item.querySelector('yt-formatted-string#video-title');
    const videoTitle = videoTitleElement ? videoTitleElement.textContent.toLowerCase().trim() : '';

    // Extract the channel name and convert it to lowercase
    const channelNameElement = item.querySelector('ytd-channel-name#channel-name yt-formatted-string#text');
    const channelName = channelNameElement ? channelNameElement.textContent.toLowerCase().trim() : '';

    // Check if the lowercase video title or channel name contains the search term
    if (videoTitle.includes(lowerCaseSearchTerm) || channelName.includes(lowerCaseSearchTerm)) {
      // Set the display style to 'none' to hide the video item
      item.style.display = 'none';
    }
  });
}

// Call the function with the term 'Sheldon' to hide videos
hideVideosWithTerm('Sheldon');



function hideVideosWithTerms(searchTerms) {
  // Convert the search terms to lowercase for case-insensitive comparison
  const lowerCaseSearchTerms = searchTerms.map(term => term.toLowerCase());

  // Select all video items
  const videoItems = document.querySelectorAll('ytd-rich-item-renderer');

  videoItems.forEach(item => {
    // Extract the video title and convert it to lowercase
    const videoTitleElement = item.querySelector('yt-formatted-string#video-title');
    const videoTitle = videoTitleElement ? videoTitleElement.textContent.toLowerCase().trim() : '';

    // Extract the channel name and convert it to lowercase
    const channelNameElement = item.querySelector('ytd-channel-name#channel-name yt-formatted-string#text');
    const channelName = channelNameElement ? channelNameElement.textContent.toLowerCase().trim() : '';

    // Check if the lowercase video title or channel name contains any of the search terms
    const shouldHide = lowerCaseSearchTerms.some(term => (videoTitle.includes(term) || channelName.includes(term)));

    // Set the display style to 'none' to hide the video item if it contains any of the search terms
    if (shouldHide) {
      item.style.display = 'none';
    }
  });
}

// Call the function with an array of terms to hide videos
hideVideosWithTerms(['Sheldon', 'Leonard']);
