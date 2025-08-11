#!/usr/bin/env python3
"""Contains function that determines index range for a certain page."""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Return index range of current page.

    :param page: current page number
    :type page: int
    :param page_size: used page size
    :type page_size: int
    :return: index range for the current page
    :rtype: tuple[int, int]
    """
    start_idx: int = page_size * (page - 1)
    end_idx: int = page_size * page
    page_content: tuple[int, int] = (start_idx, end_idx)
    return page_content
