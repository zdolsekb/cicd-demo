const expect = require('chai').expect;

const arithmetic_operations = require("../arithmetic_operations")

describe('arithmetic_operations.js tests', () => {
    describe('arithmetic_operations.add() Test', () => {
        it('should equal 2', () => {
            const result = arithmetic_operations.add([1, 1]);
            expect(result).to.equal(2);
        });
        it('should equal 7', () => {
            const result = arithmetic_operations.add([2, 2, 3]);
            expect(result).to.equal(7);
        });
    });
    describe('arithmetic_operations.substract() Test', () => {
        it('should equal 2', () => {
            const result = arithmetic_operations.substract([4, 2]);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = arithmetic_operations.substract([6, 1, 1]);
            expect(result).to.equal(4);
        });
    });
    describe('arithmetic_operations.multiply() Test', () => {
        it('should equal 3', () => {
            const result = arithmetic_operations.multiply([3, 1]);
            expect(result).to.equal(3);
        });
        it('should equal 12', () => {
            const result = arithmetic_operations.multiply([2, 2, 3]);
            expect(result).to.equal(12);
        });
    });
    describe('arithmetic_operations.divide() Test', () => {
        it('should equal 3', () => {
            const result = arithmetic_operations.divide([6, 2]);
            expect(result).to.equal(3);
        });
        it('should equal 12', () => {
            const result = arithmetic_operations.divide([24, 2, 1]);
            expect(result).to.equal(12);
        });
    });
});