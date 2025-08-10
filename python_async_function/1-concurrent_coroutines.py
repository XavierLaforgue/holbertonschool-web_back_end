#!/usr/bin/env python3
"""Contains function that awaits concurrently a given nuber of times."""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    """Wait concurrently and return wait duration list in seconds."""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results: list[float] = []
    for completed in asyncio.as_completed(tasks):
        result = await completed
        results.append(result)
    return results
