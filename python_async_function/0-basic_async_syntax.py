#!/usr/bin/env python3
"""Contains async function that waits a random time duration."""


import random
import asyncio


async def wait_random(max_delay: int = 10):
    """Wait a random amount of time (up to given max) and return it."""
    wait_in_seconds: float = random.uniform(0, max_delay)
    await asyncio.sleep(wait_in_seconds)
    return wait_in_seconds
