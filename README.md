<img src="https://img.shields.io/npm/v/@devansh5/smalldb">

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

const Smalldb=require('@devansh5/smalldb')

const db=Smalldb({optionals})

- you can pass default one Smalldb()

- specifying directory in optionals,
- Smalldb({dir:'root/src/index',ttl:1000})

### Methods


// async function init(){
    
    // await db.create('hello','namaste')
    // await db.create()
    // await db2.create('name',{firstname:'devansh',lastname:'chaubey'},1000)
    // await db.read('hello')
    // await db2.read('name')
//}
//init();

#### db.get(key)
read the specified key file from the data storage directory and returns it
return the JSON value if it exist.

#### db.create(key,value,options={ttl:1000})

will create the new file with the name of key and the content as the value from the directories

### db.delete(key)

will delete the key file from the directories


Package Link :=> <a href="https://www.npmjs.com/package/@devansh5/smalldb">Click Here</a>
