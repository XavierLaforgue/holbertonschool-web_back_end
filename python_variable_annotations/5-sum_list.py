#!/usr/bin/env python3
"""Contains annotated function that sums floats from a list."""


def sum_list(input_list: list[float]) -> float:
    """Sum flotas in a list."""
    sum: float = 0
    for n in input_list:
        sum = sum + n
    return sum
