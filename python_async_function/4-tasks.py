#!/usr/bin/env python3
"""Contains function that awaits concurrently a given number of times."""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Wait concurrently and return wait duration list in seconds."""
    tasks: List[asyncio.Task]
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results: List[float] = []
    completed: asyncio.Future[float]
    for completed in asyncio.as_completed(tasks):
        result: float = await completed
        results.append(result)
    return results
