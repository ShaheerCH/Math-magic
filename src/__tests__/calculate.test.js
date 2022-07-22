import calculate from '../logic/calculate';

it('check if obj.next to equal 5', () => {
  const btnPressed = '5';
  const obj = {
    total: '10',
    next: '0',
    operation: '+',
  };

  expect(calculate(obj, btnPressed)).toEqual({
    total: '10',
    next: '5',
    operation: '+',
  });
});

it('check if returned obj is empty, when total contains period', () => {
  const btnPressed = '.';
  const obj = {
    total: '0.34',
    next: null,
    operation: null,
  };

  expect(calculate(obj, btnPressed)).toEqual({});
});
