function extractAndLogVideoInfo() {
  // Select all video items
  const videoItems = document.querySelectorAll('ytd-rich-item-renderer');

  videoItems.forEach(item => {
    // Extract the video title
    const videoTitleElement = item.querySelector('yt-formatted-string#video-title');
    const videoTitle = videoTitleElement ? videoTitleElement.textContent.trim() : 'Title not found';

    // Extract the channel name
    const channelNameElement = item.querySelector('ytd-channel-name#channel-name yt-formatted-string#text');
    const channelName = channelNameElement ? channelNameElement.textContent.trim() : 'Channel name not found';

    // Log the video title and channel name in the specified format
    console.log(`${videoTitle}, ${channelName}`);
  });
}

// Call the function to extract and log video titles and channel names
extractAndLogVideoInfo();
