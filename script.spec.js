const calculator = require('./script');

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('adds positive numbers', () => {
    expect(calculator.add(2, 6)).toBe(8);
  });
});

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('subtracts numbers into negative', () => {
    expect(calculator.subtract(10, 20)).toBe(-10);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('multiplies negatives', () => {
    expect(calculator.multiply(-3, 2)).toBe(-6);
  });
});

describe('divide', () => {
  test('divides two numbers', () => {
    expect(calculator.divide(12, 3)).toBe(4); 
  });

  test('divides two numbers into float', () => {
    expect(calculator.divide(5, 2)).toBe(2.5); 
  });
});

describe('power', () => {
  test('raises one number to the power of another number', () => {
    expect(calculator.power(4, 3)).toBe(64); // 4 to third power is 64
  });
});

