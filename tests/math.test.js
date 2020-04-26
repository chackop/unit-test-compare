const { sum } = require('../math');

test('should calculate the sum of two numbers', () => {
	expect(4).toBe(sum(2, 2));
});
