#!/usr/bin/python3
def multiple_returns(sentence):
    if sentence == "":
        return 0, None  # tuple with len 0 and None as 1st char

    length = len(sentence)
    first_char = sentence[0]
    return length, first_char
