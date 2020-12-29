const Smalldb=require('./scripts/index')

// const db=new Smalldb({dir:'datastore'})
const db=new Smalldb();
// db.create('hello','namaste');
db.read('hello');
// db.delete('hello');
// db.create('hello','devansh',1000);


