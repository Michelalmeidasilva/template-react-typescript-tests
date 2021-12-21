import { useCallback, useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const increment = useCallback(() => setValue((x) => x + 1), []);

  const decrement = useCallback(() => setValue((x) => x - 1), []);

  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return { reset, value, increment, decrement };
};

export default useCounter;
