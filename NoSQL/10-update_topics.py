#!/usr/bin/env python3
"""Contains function that changes topics of school document based on name."""
from typing import TYPE_CHECKING, List
if TYPE_CHECKING:
    from pymongo.collection import Collection


def update_topics(mongo_collection: "Collection",
                  name: str, topics: List[str]) -> None:
    """
    Change all topics of a school documet based on name.

    :param mongo_collection: collection to update
    :type mongo_collection: "Collection"
    :param name: name by which the documents will be filtered
    :type name: str
    :param topics: topics attribute that will be added to the document with
        the name matching the filter
    :type topics: List[str]
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
