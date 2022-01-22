import { createContext, useContext, useReducer } from 'react';
import useDarkMode from '../hooks/useDarkMode';

export const store = createContext();
const initialState = {
  darkMode: useDarkMode(),
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <store.Provider value={value}>{children}</store.Provider>;
}

export function useStore() {
  const useStore = useContext(store);

  return useStore;
}
