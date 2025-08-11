#!/usr/bin/env python3
"""Contains server emulator that sends pages according to set pagination."""

import csv
import math
from typing import List, Tuple, TypedDict, Dict


def index_range(page: int, page_size: int) -> Tuple[int, int]:
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
    page_content: Tuple[int, int] = (start_idx, end_idx)
    return page_content


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Instanciate Server."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cache dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Get content that will make up the current page.

        :param page: current page number
        :type page: int
        :param page_size: size of each page
        :type page_size: int
        :return: content of the page
        :rtype: List[List[Any]]
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        list_bounds: Tuple[int, int] = index_range(page, page_size)
        cached_data: List[List] = self.dataset()
        return cached_data[list_bounds[0]:list_bounds[1]]

    # class HyperDict(TypedDict):
    #     """Return type of get_hyper."""

    #     page_size: int
    #     page: int
    #     data: List[List]
    #     next_page: int | None
    #     prev_page: int | None
    #     total_pages: int

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Return current page as hypermedia.

        :param page: current page number
        :type page: int
        :param page_size: maximum size of pages
        :type page_size: int
        :return: hypermedia for current page
        :rtype: HyperDict
        """
        page_data: List[List] = self.get_page(page, page_size)
        real_page_size: int = len(page_data)
        prev_page: int | None
        if page == 1:
            prev_page = None
        else:
            prev_page = page - 1
        data_size: int = len(self.dataset())
        total_pages: int = data_size // page_size
        if data_size % page_size != 0:
            total_pages = total_pages + 1
        next_page: int | None
        if page >= total_pages:
            next_page = None
        else:
            next_page = page + 1
        return {'page_size': real_page_size,
                'page': page,
                'data': page_data,
                'next_page': next_page,
                'prev_page': prev_page,
                'total_pages': total_pages}
