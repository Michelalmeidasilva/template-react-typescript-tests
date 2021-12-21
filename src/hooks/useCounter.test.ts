import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useCounter from './useCounter';

test('should counter start with a initial value', () => {
  const { result } = renderHook(() => useCounter(10));

  expect(result.current.value).toBe(10);
});

test('should increment and decrement be a function', () => {
  const { result } = renderHook(() => useCounter());

  expect(typeof result.current.increment).toBe('function');

  expect(typeof result.current.decrement).toBe('function');
});

test('should increment counter ', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.value).toBe(1);
});

test('should decrement counter ', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.decrement();
  });

  expect(result.current.value).toBe(-1);
});

test('should reset counter to updated initial value', () => {
  let initialValue = 330;
  const { result, rerender } = renderHook(() => useCounter(initialValue));

  initialValue = 10;
  rerender();

  act(() => {
    result.current.reset();
  });

  expect(result.current.value).toBe(10);
});

test('should reset counter to updated initial value', () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounter(initialValue),
    {
      initialProps: { initialValue: 0 }
    }
  );

  rerender({ initialValue: 10 });

  act(() => {
    result.current.reset();
  });

  expect(result.current.value).toBe(10);
});
