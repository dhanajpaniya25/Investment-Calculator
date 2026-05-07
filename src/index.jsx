// Importing ReactDOM for rendering React application
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from './App.jsx';

// Importing global CSS styles
import './index.css';

// Creating root element and rendering App component
ReactDOM
    .createRoot(document.getElementById('root'))
    .render(

        // Rendering the main App component
        <App />
    );