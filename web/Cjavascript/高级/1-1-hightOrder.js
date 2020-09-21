// let a = 'hello'
// cosnole.log(Object.prototype.toString.call(a))

//包装成一个高阶函数，批量生产函数
let types = ['String', 'Object', 'Array', 'Null', 'Undefined', 'Boolean']
let fns = {}
types.forEach(type => {
	fns['is' + type] = isType(type)
})
let a = true
console.log(fns.isBoolean())//函数柯里化  //偏函数

function isType(type) {
	return function(obj) {
		return Object.prototype.toString.call(obj).includes(type)
	}
}