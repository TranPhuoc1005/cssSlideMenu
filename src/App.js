import React from 'react';
import './assets/css/styles.css';
import './assets/css/responsive.css';
import Admin from './components/Layout/Admin';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
  );
}

export default App;
