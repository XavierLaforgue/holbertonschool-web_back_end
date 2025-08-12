#!/usr/bin/env python3
"""Contains a function that retrieves a list of documents in a mongoDB."""
from pymongo.collection import Collection
from pymongo.cursor import Cursor


def list_all(mongo_collection: Collection) -> list:
    """
    List all documents in given collection.

    :param mongo_collection: name of the collection
    :type mongo_collection: Collection
    :return: list of the documents
    :rtype: list[Any]
    """
    pymongo_cursor: Cursor = mongo_collection.find()
    return list(pymongo_cursor)
