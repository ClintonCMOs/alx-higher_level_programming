#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    try:
        for w in range(x):
            print(my_list[w], end="")
    except IndexError:
        x = w  # updates x to index reached before exception occurred
    finally:
        print()
        return x
