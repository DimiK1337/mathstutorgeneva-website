import os
import argparse

def rename_files(directory, delimiter, recursive):
    renamed_count = 0
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if ' ' in filename:
                old_path = os.path.join(root, filename)
                new_filename = filename.replace(' ', delimiter)
                new_path = os.path.join(root, new_filename)
                os.rename(old_path, new_path)
                print(f"Renamed: {old_path} → {new_path}")
                renamed_count += 1
        if not recursive:
            break

    print(f"\n✅ Done. Renamed {renamed_count} file(s).")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Rename files by replacing spaces with a custom delimiter.")
    parser.add_argument("--directory", "-d", required=True, help="Path to directory with files to rename")
    parser.add_argument("--delimiter", default="-", help="Character to replace spaces with (default: '-')")
    parser.add_argument("--recursive", "-r", action="store_true", help="Recursively rename files in subdirectories")

    args = parser.parse_args()
    rename_files(args.directory, args.delimiter, args.recursive)
