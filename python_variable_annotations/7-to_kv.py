#!/usr/bin/env python3
"""Contains annotated function that returns a tuple."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return key-value frlom string and int or float inputs."""
    return (k, v**2)
