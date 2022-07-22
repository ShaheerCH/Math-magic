import operate from '../logic/operate';

it('testing addition', () => {
  expect(operate(5, 20, '+')).toEqual('25');
});

it('testing multiplication', () => {
  expect(operate(10, 3, 'x')).toEqual('30');
});

it('testing substracting', () => {
  expect(operate(10000, 20, '-')).toEqual('9980');
});

it('testing division', () => {
  expect(operate(100, 20, '÷')).toEqual('5');
});
