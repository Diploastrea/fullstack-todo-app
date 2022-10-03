import { validatePriority, validateDate } from '../taskService/addTaskService';

test('validatePriority given invalid enum', () => {
  const fnc = () => validatePriority('low-ish');
  expect(fnc).toThrow('invalidPriority');
});

test('validatePriority given valid enum', () => {
  const fnc = () => validatePriority('high');
  expect(fnc).not.toThrow(Error);
});

test('validateDate given wrong date format', () => {
  const fnc = () => validateDate('05.12.22');
  expect(fnc).toThrow('invalidDateFormat');
});

test('validateDate given due date in the past', () => {
  const fnc = () => validateDate('1999-01-01');
  expect(fnc).toThrow('invalidDate');
});

test('validateDate given valid date', () => {
  const fnc = () => validateDate('2025-01-01');
  expect(fnc).not.toThrow(Error);
});
