const Dumbdb=require('./scripts/index')

// const db=new Dumbdb({dir:'datastore'})
const db=new Dumbdb();
// db.create('hello','namaste');
db.read('hello');
// db.delete('hello');
// db.create('hello','devansh',1000);


