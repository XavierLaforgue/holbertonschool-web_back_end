#!/usr/bin/env python3
"""Contains funtion that insertsa new documentin collection."""
from typing import TYPE_CHECKING, Any
if TYPE_CHECKING:
    from pymongo.collection import Collection


def insert_school(mongo_collection: "Collection", **kwargs: Any) -> str:
    """
    Insert new document in given mongo collection based on kwargs.

    :param mongo_collection: collection where to insert
    :type mongo_collection: "Collection"
    :param kwargs: attributes and values of the new document to be inserted
    :type kwargs: Any
    :return: id of the inserted document
    :rtype: str
    """
    return mongo_collection.insert_one(kwargs).inserted_id
