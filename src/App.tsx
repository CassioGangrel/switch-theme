import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './style/themes/light';
import dark from './style/themes/dark';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './style/global'
import Header from './components/Header'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
