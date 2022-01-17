import {useRef, useState} from 'react';

// Custom hook for state same as class components
export type SetStateAction<S> = (prevState: S) => void;

function useObjectState<S>(
  initialState: S,
): [S, SetStateAction<Partial<S>>] {
  const [state, setData] = useState(initialState);
  const storeState = useRef(initialState);
  function setState(params: Partial<S>): void {
    const newState = {
      ...storeState.current,
      ...params,
    };
    storeState.current = newState;
    setData(newState);
  }
  return [state, setState];
}

export default useObjectState;
