# Website Availability Checker with Basic Content Length Threshold

**Real-life application:** This Python code can be used for various purposes, including:

* **Monitoring website uptime:** Regularly checking if a website is accessible by attempting to download content and verifying the response code.
* **Identifying potential broken links:** Checking links on a website to see if they point to active and accessible resources.
* **Gathering basic information about websites:** Extracting limited content from websites to get a high-level overview of their functionality.

**Documentation:**

**1. Imports:**

* `requests`: Used to send HTTP requests to websites.
* `BeautifulSoup`: Used to parse HTML content from websites.

**2. User Input:**

* The code prompts the user to enter a website name using `input()`.

**3. Error Handling:**

* The code uses a `try-except` block to handle potential exceptions during the HTTP request process.

**4. Processing:**

* If the initial request to IANA is successful:
    * The HTML content is parsed using BeautifulSoup.
    * Links starting with `/domains/root/db/` are extracted.
    * For each extracted link:
        * A full URL is constructed combining the user-provided website name and the extracted link.
        * The code attempts to access the constructed URL using both HTTPS and HTTP protocols, handling potential exceptions for each.
        * If the website is accessible (status code 200) and the content length is greater than 50,000 bytes, the full URL is printed.

**5. Output:**

* The code prints the accessible URLs with content exceeding the specified threshold.

**Note:**

* This code provides a basic example and can be further customized for specific needs.
* Consider adding more robust error handling and content extraction logic for practical applications.
