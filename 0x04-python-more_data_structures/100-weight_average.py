#!/usr/bin/python3
def weight_average(my_list=[]):
    if my_list and len(my_list):
        number = 0
        denominator = 0
        for tupple in my_list:
            number += (tupple[0] * tupple[1])
            denominator += tupple[1]
        return (number / denominator)
    return 0
