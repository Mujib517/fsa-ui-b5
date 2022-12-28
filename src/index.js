import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<React.StrictMode>
        <App />
    </React.StrictMode>);

