#!7usr/bin/env python3
"""Contains annotated function with iterables."""
from typing import Iterable, Tuple, Sequence, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return tuple with Sequence element in the input iterable and its length.

    :param lst: Iterable of Sequences
    :type lst: Iterable[Sequence]
    :return: list of tuples with a Sequence and its length
    :rtype: List[Tuple[Sequence, int]]
    """
    return [(i, len(i)) for i in lst]
