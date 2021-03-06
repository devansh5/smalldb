const fs=require('fs')
const path=require('path')

class Smalldb {
	constructor(userOptionals){
		this.optionals={}
		this.defaults={
			dir:'localds',
			ttl:100000,
			stringify:JSON.stringify,
			parse:JSON.parse,
			encoding:'utf8',
			expires:'false',
			exist:'true',
		}
		this.setOptionals(userOptionals)
		fs.access(this.optionals.dir,(err,files)=>{
			if(!err){
			}
			else{
				fs.mkdir(this.optionals.dir,{recursive:true},(err)=>{
					if (err) throw err
				})
			}
		})
	}

	setOptionals = (userOptionals)=>{
		if(!userOptionals){
			this.optionals = this.defaults
		}else{
			for(let key in this.defaults){
				if(userOptionals[key]){
					this.optionals[key] = userOptionals[key]
				}else{
					this.optionals[key] = this.defaults[key]
				}
			}
		}
	}

	createFile=(key,value)=>{
		let json=this.optionals.stringify(value)
		let file=this.optionals.dir+"/"+key
		return new Promise((resolve,reject)=>{
			fs.writeFile(file,json,this.optionals.encoding,(err)=>{
				if (err){
					resolve(err)
				}
				resolve({file:file,json:json})
			})
		})
		
	}

	parseFile=(key)=>{
		let file=this.optionals.dir+"/"+key
		// 'this' to be access inside closure scope
		let _this=this
		return new Promise((resolve,reject)=>{
			fs.readFile(file,this.optionals.encoding,function(err,json){
				if (err){
					if(err.code === 'ENOENT'){
						console.log("key with name"+key+"does'nt exist")
						resolve(err)
					}
				}
				else{
					// console.log(_this.optionals)
					let value=_this.optionals.parse(json)
					console.log(value)
				}
			})
		})		
	}

	read(key){
		this.optionals.expires=true?this.optionals.ttl<(new Date()).getTime():false
		if(typeof key!='string'){
			console.log("can't access the key other than string")
		}
		else if(this.optionals.expires){			
			this.delete(key)
		}
		else{
			this.parseFile(key)
		}
	}

	create(key,value,ttl){
		let _this=this
		if (typeof ttl=== 'undefined'){
			ttl=this.optionals.ttl
		}
		let now=new Date()
		this.optionals.ttl=now.getTime()+ttl
		this.createFile(key,value)

	}

	delete(key){
		let file=path.join(this.optionals.dir,key)
		return new Promise((resolve,reject)=>{
			fs.open(file,'r',(err,fd)=>{
				if(err){
					if(err.code==='ENOENT'){
						console.error("key does not exist")
						return resolve(err)
					}
				}
				else{
					fs.unlink(file,(err)=>{
						if (err){
							return reject(err)
						}
						resolve("done")
						console.log(key+'was deleted')
					})
				}
			})		
		})
		
	}
}

module.exports = Smalldb
