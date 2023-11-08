#!/usr/bin/python3
def search_replace(my_list, search, replace):
    copy = []
    for x in range(len(my_list)):
        if my_list[x] == search:
            copy.append(replace)
        else:
            copy.append(my_list[x])
    return copy
