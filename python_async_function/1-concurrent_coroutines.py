#!/usr/bin/env python3
"""Contains function that awaits concurrently a given nuber of times."""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    """Wait concurrently and return wait duration list in seconds."""
    list_tasks: list[asyncio.Task] = []
    for i in range(n):
        list_tasks.append(asyncio.create_task(wait_random(max_delay)))
    list_waits: list[float] = await asyncio.gather(*list_tasks)
    return list_waits
