import React, { useState, useContext, useCallback, createContext } from 'react'


type ContextProps = {
    step: number;
    children: JSX.Element;
  };

const CounterStepContext = createContext({} as ContextProps);

const CounterStepProvider = ({ step, children }) => {
    return <CounterStepContext.Provider />

}


 const useCounterTest2 = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)
  const step = useContext(CounterStepContext)
  const increment = useCallback(() => setCount((x) => x + step), [step])
  const reset = useCallback(() => setCount(initialValue), [initialValue])
  return { count, increment, reset }
}





export { CounterStepProvider, useCounterTest2 };
