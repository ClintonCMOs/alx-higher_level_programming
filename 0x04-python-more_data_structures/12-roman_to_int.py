#!/usr/bin/python3
def roman_to_int(roman_string):
    if not isinstance(roman_string, str) or roman_string is None:
        return 0
    Rom_numeral = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50,
            'C': 100, 'D': 500, 'M': 1000
            }
    answer = 0
    valuebefore = 0

    for _numeral in reversed(roman_string):
        current_value = Rom_numeral.get(_numeral, 0)

        if current_value >= valuebefore:
            answer = answer + current_value
        else:
            answer = answer - current_value
        valuebefore = current_value
    return answer
