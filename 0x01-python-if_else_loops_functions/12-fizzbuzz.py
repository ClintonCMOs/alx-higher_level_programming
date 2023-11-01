#!/usr/bin/python3
"""Print the numbers from 1 to 100 separated by a space.
  For multiples of 3, print Fizz.
  For multiples of 5, print Buzz.
  For multiples of 3 and 5, print FizzBuzz.
  """
def fizzbuzz():
    for number in range(1, 101):
        if number % 3 == 0 and number % 5 == 0:
            print("FizzBuzz ", end="")
        elif number % 3 == 0:
            print("Fizz ", end="")
        elif number % 5 == 0:
            print("Buzz ", end="")
        else:
            print("{} ".format(number), end="")
