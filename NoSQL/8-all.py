#!/usr/bin/env python3
"""
Docstring for 8-all
"""
from pymongo.collection import Collection, Cursor


def list_all(mongo_collection: Collection) -> list:
    pymongo_cursor: Cursor = mongo_collection.find()
    return list(pymongo_cursor)
