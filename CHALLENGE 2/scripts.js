
// script.js

const add = (a, b) => {return  a + b }

const multiply = (a, b) => { return a * b}


function internal() {
	const result1 = this.add(this.internal.a, this.internal.b)
	const result2 = this.multiply(result1, this.internal.c)
	
	console.log(result2)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
