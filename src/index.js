import React from 'react';
// import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';// nuevo para react 18

document.body.dataset.layoutConfig =
  '{"leftSidebarCondensed":false,"darkMode":true, "showRightSidebarOnStart": false}';

// usando react 18
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// IMPORTANTE
// El StrictMode o modo estricto es una funcionalidad de react para
// poder verficar en buen funcionamentode la app
// vuelve a verificar 2 veces si el componente funciona correctamente
// desactivar si no queremos que se llame 2 veces a un endpoint
// o montar y desmonantar un componete dos veces OK

