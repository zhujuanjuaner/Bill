# coding=utf-8

import sys
import os

from setting import include_ext


def delete(source_dir):
    list_dir = [source_dir]
    for dir in list_dir:
        for item in os.listdir(dir):
            item_path = os.path.join(dir, item)
            if os.path.isdir(item_path):
                list_dir.append(item_path)
            elif os.path.splitext(item)[1] not in include_ext:
                print(item_path)
                os.remove(item_path)

if  __name__ == '__main__':
    argvs = sys.argv
    extra_source_dirs = argvs[1]
    delete(extra_source_dirs)