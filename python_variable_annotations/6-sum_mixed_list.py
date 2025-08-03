#!/usr/bin/env python3
"""Contains annotated function that resturns sum of mixed list as float."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Sum elements in list of floats and ints."""
    sum: float = 0
    for n in mxd_lst:
        sum = sum + n
    return sum
