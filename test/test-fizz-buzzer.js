const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
	it('should return fizz', function() {
		const fizzCases = [3,6,9,12,18,21];
		fizzCases.forEach(input => {
			const response = fizzBuzzer(input);
			response.should.equal('fizz');
		});
	});

	it('should return buzz', function() {
		const buzzCases = [5,10,20,25,35];
		buzzCases.forEach(input => {
			const response = fizzBuzzer(input);
			response.should.equal('buzz');
		})
	})

	it('should return fizz-buzz', function() {
		const fizzBuzzCases = [15,30,45,60,75];
		fizzBuzzCases.forEach(input => {
			const response = fizzBuzzer(input);
			response.should.equal('fizz-buzz');
		})
	})
	it('should return the input', function() {
		const numCases = [1,2,4,7,8];
		numCases.forEach(input => {
			const response = fizzBuzzer(input);
			response.should.equal(input);
		})
	})

	it('should throw error', function() {
		const notNumCases = [false, 'hello', [1,2]];
		notNumCases.forEach(input => {
			(function() {fizzBuzzer(input)}).should.throw(Error);
		})
	})
})