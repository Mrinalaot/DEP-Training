// Array Helpers
// http://www.codewars.com/kata/array-helpers

Array.prototype.square = function() { return this.map(x => x * x) }
Array.prototype.cube = function() { return this.map(x => x * x * x) }
Array.prototype.sum = function() { return this.reduce((s, v) => s + v, 0) }
Array.prototype.average = function() { return this.reduce((s, v) => (s + v), 0) / this.length }
Array.prototype.even = function() { return this.filter(x => x % 2 === 0) }
Array.prototype.odd = function() { return this.filter(x => x % 2 !== 0) }