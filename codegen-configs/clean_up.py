import os
import re
import sys
import glob
import shutil

def js2ts(service):
    for js_file_path in glob.glob(f'./src/graphql/{service}/**/*.js', recursive=True):
        ts_file_path = js_file_path.replace('.js', '.ts')
        shutil.move(js_file_path, ts_file_path)

def remove_exclamation_marks(service):
    for target_file_path in glob.glob(f'./src/graphql/{service}/**/*.ts', recursive=True) + glob.glob(f'./src/graphql/{service}/**/*.graphql', recursive=True):
        with open(f"{target_file_path}.tmp", 'w+', encoding="utf-8") as tmp_file:
            with open(target_file_path, 'r', encoding="utf-8") as file:
                lines = file.readlines()
                for line in lines:
                    if re.match(r".*@param \w+! .+", line):
                        line = line.replace('!', '')
                    if os.path.splitext(target_file_path)[1] == '.graphql' and re.match(r".+\(\s*\w*:\s*\w+!.*\)", line):
                        line = line.replace('!', '')
                    tmp_file.write(line)
                    
        shutil.move(f"{target_file_path}.tmp", target_file_path)

def main():
    service = sys.argv[1]
    js2ts(service)
    remove_exclamation_marks(service)
    
if __name__ == "__main__":
    main()
