#!/usr/bin/env python3
"""Contains Python script providing stats on Nginx logs stored in MongoDb."""

if __name__ == "__main__":
    from pymongo import MongoClient

    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx
    print(f'{nginx_collection.count_documents({})} logs')
    print('Methods:')
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        num_docs: int = nginx_collection.count_documents({"method": method})
        print(f'\tmethod {method}: {num_docs}')
    docs_get_path: int = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"})
    print(f'{docs_get_path} status check')
