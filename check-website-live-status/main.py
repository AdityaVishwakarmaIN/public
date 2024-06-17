import requests
from bs4 import BeautifulSoup

url = "https://www.iana.org/domains/root/db"
user_input = input("Add Website Name: ").strip()

try:
    response = requests.get(url)
    response.raise_for_status()
    html = response.text
except requests.exceptions.RequestException as e:
    print("Request Error:", e)

if html:
  soup = BeautifulSoup(html, "html.parser")
  domain_links = soup.find_all("a", href=lambda x: x and x.startswith("/domains/root/db/"))
  domain_list = [link.get_text().strip() for link in domain_links]
  for domain in domain_list:
    url = 'www.' + user_input + domain
    outputtext = ''
    try:
      # Send an HTTP GET request to the domain using the HTTPS protocol
      response = requests.get('https://' + url, stream=True, timeout=1)
      status_code = response.status_code
      outputtext = 'https://' + url
    except requests.exceptions.RequestException:
      try:
        # If the HTTPS request fails, send an HTTP GET request to the domain using the HTTP protocol
        response = requests.get('http://' + url, stream=True, timeout=1)
        status_code = response.status_code
        outputtext = 'http://' + url
      except requests.exceptions.RequestException:
        # If both the HTTPS and HTTP requests fail, set the status_code to None
        status_code = None

    # Check if the status_code is 200
    if status_code == 200:
      # Print the URL if the status_code is 200
      response_body = response.content
      content_length = len(response_body)
      if content_length > 50000:
        print(outputtext)
