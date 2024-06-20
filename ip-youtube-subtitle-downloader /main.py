!pip install requests beautifulsoup4

import requests, json, xml.etree.ElementTree as ET, re, html
from bs4 import BeautifulSoup

def get_subtitles(video_id, language_code='en'):
    # Fetch the video page
    url = f'https://www.youtube.com/watch?v={video_id}'
    response = requests.get(url)
    html = response.text

    # Parse the HTML and extract the initial player response
    soup = BeautifulSoup(html, 'html.parser')
    script = soup.find('script', string=lambda text: text and 'ytInitialPlayerResponse' in text)

    if script:
        # Use regular expression to extract the JSON data
        json_data = re.search(r'ytInitialPlayerResponse\s*=\s*({.*?});', script.string, re.DOTALL).group(1)
        initial_player_response = json.loads(json_data)

        # Find the subtitle track with the specified language code
        subtitle_track = None
        captions = initial_player_response['captions']['playerCaptionsTracklistRenderer']['captionTracks']
        for track in captions:
            if track['languageCode'] == language_code:
                subtitle_track = track
                break

        if subtitle_track:
            # Fetch the subtitle XML
            subtitle_url = subtitle_track['baseUrl']
            response = requests.get(subtitle_url)
            subtitle_xml = response.text

            # Parse the subtitle XML and extract the subtitle data
            root = ET.fromstring(subtitle_xml)
            subtitles = []
            for subtitle in root.findall('text'):
                start = subtitle.get('start')
                duration = subtitle.get('dur')
                text = subtitle.text
                subtitles.append({'start': start, 'duration': duration, 'text': text})

            return subtitles
        else:
            return None
    else:
        return None

def get_subtitles_from_url(url, language_code='en'):
    # Extract the video ID from the URL
    video_id = re.search(r'(?:v=|\/embed\/|\/watch\?v=|youtu\.be\/)([^\s&]+)', url).group(1)
    
    # Call the get_subtitles function with the video ID
    subtitles = get_subtitles(video_id, language_code)
    
    if subtitles:
        # Clean the 'text' key values by converting HTML entities to normal characters
        cleaned_subtitles = []
        for subtitle in subtitles:
            cleaned_text = html.unescape(subtitle['text'])
            cleaned_subtitles.append({'start': subtitle['start'], 'duration': subtitle['duration'], 'text': cleaned_text})
        
        # Join the cleaned 'text' key values using space delimiter
        subtitle_text = ' '.join([subtitle['text'] for subtitle in cleaned_subtitles])
        
        return subtitle_text
    else:
        return None

print(get_subtitles_from_url("https://www.youtube.com/watch?v=ZEF2PzDvdt8"))
