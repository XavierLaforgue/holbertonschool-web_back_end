#!/usr/bin/env python3
"""Deletion-resilient hypermedia pagination."""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize Server instance."""
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cache dataset as a list of lists."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return indexed hypermedia.

        :param index: current start index of the page
        :type index: int | None
        :param page_size: size of the page
        :type page_size: int
        :return: hypermedia for current page with indexes.
        :rtype: Dict
        """
        dataset: Dict[int, List] = self.indexed_dataset()
        start: int
        if index is None:
            start = next(iter(dataset))
        else:
            assert (isinstance(index, int) and index > min(dataset.keys())
                    and index < max(dataset.keys()))
            start = index
        count: int = 0
        data: List[List] = []
        next_start: int | None = None
        for k, v in dataset.items():
            if k < start:
                continue
            if count >= page_size:
                next_start = k
                break
            count += 1
            # if count == 1:
            #     start = k
            data.append(v)
        return {
            'index': start,
            'next_index': next_start,
            'page_size': len(data),
            'data': data
        }
