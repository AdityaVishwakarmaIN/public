# Title: **Delete Microsoft Edge Browsing History by Domain (Python Script)**

## Description:

This Python script allows you to **delete browsing history entries associated with a specific website domain** from Microsoft Edge. 

**Features:**

* Connects to the Edge user profile's SQLite database.
* Deletes entries containing the provided domain name in the URL.
* Prints a confirmation message upon successful deletion.

**Usage:**

1. **Save the script as a Python file (e.g., delete_edge_history.py).**
2. **Replace "Default" in the `profile_directory` variable with your actual Edge profile directory (if needed).**
3. **Run the script from the command line, specifying the domain to delete history for:**

```
python delete_edge_history.py your_domain.com
```

**Example:**

```
python delete_edge_history.py youtube.com
```

This will delete all browsing history entries containing "youtube.com" from your Edge browser.

**Important notes:**

* Use this script with caution and at your own risk. It modifies browser data and might have unintended consequences.
* Back up your data before running the script as modifying databases can lead to data loss.
* This script is specific to Microsoft Edge and might not work with other browsers or Edge versions.
