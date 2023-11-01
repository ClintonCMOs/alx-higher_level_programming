#!/usr/bin/python3
def print_last_digit(number):
    if number < 0:
        number = -number
    end_num = number % 10
    print(end_num, end='')
    return end_num
