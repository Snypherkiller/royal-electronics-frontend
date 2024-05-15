import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import router from './routers/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AddSupplier from './pages/dashboard/AddSupplier.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
