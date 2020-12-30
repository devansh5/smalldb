const Smalldb=require('./scripts/index')

const db=new Smalldb({dir:'datastore'})
const db2=new Smalldb({dir:'storage'})
async function init(){
    
    await db.create('hello','namaste')
    // await db.create()
    await db2.create('name',{firstname:'devansh',lastname:'chaubey'},1000)
    await db.read('hello')
    await db2.read('name')
}
init();


