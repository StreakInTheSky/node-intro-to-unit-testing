const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('adder', function () {
	it('should return fizz', function() {
		const fizzCases = [3,6,9,12,18,21];
		fizzCases.forEach(function(input) {
			const response = fizzBuzzer(input);
			response.should.equal('fizz');
		});
	});

	it('should return buzz', function() {

	})

	it('should return fizz-buzz', function() {

	})

	it('should throw error', function() {

	})
})