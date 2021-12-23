import { useCallback, useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);
  
  const increment = useCallback(() => setValue((x) => x + 1), []);

  const decrement = useCallback(() => setValue((x) => x - 1), []);


  /**
   * Many of the hook primitives use an array of dependent values to determine
   * when to perform specific actions, such as recalculating an expensive value or running an effect. 
   * If we extend our useCounter 
   * hook to have a reset function that resets the value to the initialValue it might look something like this:
   */
  /**
   * Now, the only time the reset function will be updated is if initialValue changes. The most basic way to handle changing the input props 
   * of our hook in a test is to simply update the value in a variable and rerender the hook:
   */
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return { reset, value, increment, decrement };
};

export default useCounter;
