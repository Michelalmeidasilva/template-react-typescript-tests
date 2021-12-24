import { renderHook, act } from '@testing-library/react-hooks'
import { CounterStepProvider, useCounterTest2 } from './useCounterContext';

test('should use custom step when incrementing', () => {
  const wrapper = ({ children }) => <CounterStepProvider step={2}>{children}</CounterStepProvider>
  const { result } = renderHook(() => useCounterTest2(), { wrapper })

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(2)
})