#!/usr/bin/python3
def magic_calculation(a, b):
    from magic_calculation_102 import add, sub
    if a < b:
        addition = add(a, b)
        for x in range(4, 6):
            addition = add(addition, x)
        return (addition)
    else:
        return (sub(a, b))
