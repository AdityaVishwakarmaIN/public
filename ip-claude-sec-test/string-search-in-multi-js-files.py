import os
import glob

def search_js_files(directory, search_term):
    """Searches for a term (case-insensitive) within .js files in a directory.
       Returns a list of tuples: (filename, line_number, line_content) 
    """
    search_term_lower = search_term.lower()
    matched_files = []

    for filename in glob.glob(os.path.join(directory, "*.js")):
        with open(filename, 'r') as file:
            for line_number, line_content in enumerate(file, 1):  # Enumerate lines
                if search_term_lower in line_content.lower():
                    matched_files.append((filename, line_number, line_content.strip()))

    return matched_files

# Example usage
directory_to_search = "your/javascript/directory"  
search_term = "your search term"
results = search_js_files(directory_to_search, search_term)

if results:
    print("Search term found in these files and lines:")
    for filename, line_number, line_content in results:
        print(f"- File: {filename}, Line: {line_number}, Content: {line_content}")
else:
    print("Search term not found in any .js files.")
