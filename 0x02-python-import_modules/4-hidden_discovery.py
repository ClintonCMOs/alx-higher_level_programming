#!/usr/bin/python3
import hidden_4


def print_hidden_names():
    for name in dir(hidden_4):
        if not name.startswith("__"):
            print(name)


if __name__ == "__main__":
    print_hidden_names()
