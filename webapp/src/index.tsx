import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.scss';

const App = () => {
  return (
    <div>
      <h1>Welcome to My Blog!!!!</h1>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);