import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router'
import App from './components/App';
import './styles/index.min.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
