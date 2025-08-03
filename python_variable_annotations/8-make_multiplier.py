#!/usr/bin/env python3
"""Contains annotated function that multiplies input by given multiplier."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return function that multiplies float argumet by multiplier."""
    return lambda f: multiplier*f
