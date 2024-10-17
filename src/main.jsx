import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { router } from './routes'; 
import GlobalStyles from './styles/globalStyles'; 
import AppProvider from './hooks'; // Certifique-se que o caminho está correto e AppProvider é exportado corretamente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer autoClose={3000} theme="colored" /> {/* 3000ms é um tempo mais padrão */}
    </AppProvider>
  </React.StrictMode>
);
