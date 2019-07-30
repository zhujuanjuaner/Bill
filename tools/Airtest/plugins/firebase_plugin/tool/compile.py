# coding = utf-8
import sys
import os
import subprocess

def compile_dir(dfn):
    subprocess.call(['python', '-OO', '-m', 'compileall', '-f', dfn])

if __name__ == "__main__":
    source_dir = sys.argv[1]
    compile_dir(source_dir)