#!/usr/bin/env python3
"""Contains function that returns a list of schools having a certain topic."""
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from pymongo.collection import Collection


def schools_by_topic(mongo_collection: "Collection", topic: str) -> list:
    """
    Return list of schools having a specific topic.

    :param mongo_collection: name of collection to search document in
    :type mongo_collection: "Collection"
    :param topic: topic to search in documents
    :type topic: str
    :return: list of schools with the topic
    :rtype: list[Any]
    """
    return list(mongo_collection.find({"topics": topic}))
