import { CssBaseline } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

// TODO - Add typography sizes
const themeOptions = {
  palette: {
    type: 'dark',
    common: { black: '#000', white: '#fff' },
    primary: {
      main: '#01080E',
      light: '#011221',
      lighter: '#011627',
      contrastText: '#fff',
    },
    secondary: {
      main: '#607B96',
      blue: '#3C9D93',
      purple: '#4D5BCE',
    },
    accent: {
      main: '#FEA55F',
      green: '#43D9AD',
      orange: '#E99287',
      pink: '#C98BDF',
    },
    gradients: {
      main: '#4D5BCE',
      secondary: '#43D9AD',
    },
    lines: { main: '#607B96', light: '#1E2D3D' },
    text: {
      primary: '#000',
      secondary: '#000',
    },
  },
  typography: {
    fontFamily: ['Fira Code, monospace', 'sans-serif'].join(','),
  },
};

export default function ThemeProvider({ children }) {
  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
