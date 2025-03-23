import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap';
import '../css/app.css';
import Home from './components/Home';


// Very simple component for testing
const App = () => (
  <div style={{
    padding: '20px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  }}>
    {/* <h1 style={{ color: '#3490dc' }}>React is Working!</h1>
    <p>This is a basic test component to verify React is rendering correctly in Laravel.</p> */}
 <Home/>
  </div>
);

// Log for debugging
console.log('React app.tsx is loading...');

// Make sure to wait for DOM to be fully loaded before trying to find #app
document.addEventListener('DOMContentLoaded', () => {
  // Find the app element after DOM is loaded
  const appElement = document.getElementById('app');
  console.log('DOMContentLoaded triggered', { appElementExists: !!appElement });

  if (appElement) {
    // Use React 18's createRoot API
    const root = ReactDOM.createRoot(appElement);
    root.render(<App />);
    console.log('React render call complete');
  } else {
    console.error('Could not find #app element to mount React');
    // Show error in the page
    document.body.innerHTML += '<div style="color: red; padding: 20px;">Error: Could not find #app element for React</div>';
  }
});
