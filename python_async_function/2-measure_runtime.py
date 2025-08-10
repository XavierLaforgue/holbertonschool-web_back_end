#!/usr/bin/env python3
"""Contains function that returns total elapsed time of execution."""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Return average runtime of the executed function."""
    start: float = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end: float = time.perf_counter()
    return (end - start) / n
