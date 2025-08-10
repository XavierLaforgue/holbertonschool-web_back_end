#!/usr/bin/env python3
"""Contain function that returns an async task."""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return asyncio task."""
    task: asyncio.Task = wait_random(max_delay)
    return task
