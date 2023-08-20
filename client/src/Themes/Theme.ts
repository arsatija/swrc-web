import { ThemeOptions } from '@mui/material/styles';

export const dark: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#fbc02d',
    },
    success: {
      main: '#4BB543',
    },
    error: {
      main: '#FC100D',
    },
    background: {
      default: '#181818',
      paper: '#181818', 
    },
  },
  
};

export const light: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#fbc02d',
    },
    success: {
      main: '#4BB543',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FC100D',
    },
  }
}