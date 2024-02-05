import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './routes/animatedRoutes/animatedRoutes';
import { ThemeContext } from './themeProvider';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
