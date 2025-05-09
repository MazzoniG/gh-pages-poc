const fibonacci = require('../src/fibonacci');

describe('Fibonacci Function', () => {
    test('should return 0 for n = 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('should return 0 for negative numbers', () => {
        expect(fibonacci(-1)).toBe(0);
        expect(fibonacci(-5)).toBe(0);
    });

    test('should return 1 for n = 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('should calculate small Fibonacci numbers correctly', () => {
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(4)).toBe(3);
        expect(fibonacci(5)).toBe(5);
        expect(fibonacci(6)).toBe(8);
        expect(fibonacci(7)).toBe(13);
    });

    test('should calculate larger Fibonacci numbers correctly', () => {
        expect(fibonacci(10)).toBe(55);
        expect(fibonacci(12)).toBe(144);
    });
});