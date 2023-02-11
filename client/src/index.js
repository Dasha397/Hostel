import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Profile from './account/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentProfile from './account/StudentProfile';

export const Context = createContext(null)

//console.log('==' + process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new Profile(),
      students: new StudentProfile(),
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
