https://img.shields.io/npm/v/@devansh5/smalldb

Smalldb is npm package meant for key-value storage.

## Features
- For storing the key as file and value as content in specific key file.
-  Time To Live (TTL) based cache 
- Supports the current active LTS version of Node.js or higher


## Usage

Install smalldb

```
npm install --save @devansh5/smalldb
```


Create a new Smalldb instance , as default this intialize a default values for ttl and directory.

const Smalldb=require('')