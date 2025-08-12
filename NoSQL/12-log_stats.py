#!/usr/bin/env python3
"""Contains Python script providing stats on Nginx logs stored in MongoDb."""
from pymongo import MongoClient

client = MongoClient('mongodb://127.0.0.1:27017')
nginx_collection = client.logs.nginx
print(f'{nginx_collection.count_documents({})} logs')
print('Methods:')
print(f'\tmethod GET: {nginx_collection.count_documents({"method": "GET"})}')
print(f'\tmethod POST: {nginx_collection.count_documents({"method": "POST"})}')
print(f'\tmethod PUT: {nginx_collection.count_documents({"method": "PUT"})}')
print(f'\tmethod PATCH: {nginx_collection.count_documents({"method": "PATCH"})}')
print(f'\tmethod DELETE: {nginx_collection.count_documents({"method": "DELETE"})}')
print(f'{nginx_collection.count_documents({"method": "GET", "path": "/status"})} status check')
