import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

//User imports here 
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render( <App/> );
