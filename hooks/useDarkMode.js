import Cookies from 'js-cookie';
// import useMediaQuery from './useMediaQuery';

// ideal useDarkMode hook, uses user preference!
// export default function useDarkMode() {
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//   const cookiesDarkModeValue = Cookies.get('darkMode') === 'ON' ? true : false;

//   const darkMode = cookiesDarkModeValue ?? prefersDarkMode;
//   return darkMode;
// }

export default function useDarkMode() {
  const cookiesDarkModeValue = Cookies.get('darkMode') === 'ON' ? true : false;

  const darkMode = cookiesDarkModeValue;
  return darkMode;
}
