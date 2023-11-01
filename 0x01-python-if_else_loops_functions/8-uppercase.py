#!/usr/bin/python3
def uppercase(str):
    for y in str:
        if ord(y) >= ord('a') and ord(y) <= ord('z'):
            char = chr(ord(y) - 32)
        else:
            char = y
        print("{:s}".format(char), end="")
    print('')
