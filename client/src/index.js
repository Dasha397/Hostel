import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProfile from './account/IsProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserProfile()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
