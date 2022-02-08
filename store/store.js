import { createContext, useContext, useReducer } from 'react';
import useDarkMode from '../hooks/useDarkMode';

export const store = createContext();
const initialState = {
  darkMode: useDarkMode(),
  navState: false,
  sidebarState: false
};

function reducer(state, action) {
  switch (action.type) {
    // control darkMode
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    // control mobile nav
    case 'TOGGLE_NAV':
      return { ...state, navState: !state.navState };
    case 'SHOW_NAV':
      return { ...state, navState: true };
    case 'HIDE_NAV':
      return { ...state, navState: false };
    // control sidebar
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarState: !state.sidebarState };
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
