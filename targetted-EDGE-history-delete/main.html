import sqlite3
import os

def delete_history_entries(domain):
    # Get the user's Edge profile directory
    profile_directory = "Default"  # Change this to the actual profile directory if needed
    edge_data_path = os.path.join(os.getenv("LocalAppData"), "Microsoft", "Edge", "User Data", profile_directory)
    history_db_path = os.path.join(edge_data_path, "History")

    # Connect to the SQLite database
    conn = sqlite3.connect(history_db_path)
    cursor = conn.cursor()

    # Execute the delete command
    cursor.execute(f"DELETE FROM urls WHERE url LIKE '%{domain}%'")

    # Commit the changes and close the connection
    conn.commit()
    conn.close()

    print(f"All history entries for {domain} have been deleted.")

# Example usage: Delete all history entries for "example.com"
delete_history_entries("youtube.com")
