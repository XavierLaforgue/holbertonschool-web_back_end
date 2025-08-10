#!/usr/bin/env python3
"""Contains function that executes concurrently async_comprehension."""
import asyncio
import time
from typing import List
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Execute async_comprehension four times in parallel."""
    start: float = time.perf_counter()
    tasks: List[asyncio.Task] = [asyncio.create_task(async_comprehension())
                                 for _ in range(4)]
    await asyncio.gather(*tasks)
    end: float = time.perf_counter()
    return end - start
