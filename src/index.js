// Встановлення бібліотеки:
// $ npm install @reduxjs/toolkit
// $ npm install redux
// $ npm install @redux-devtools/extension

import React from 'react';
import ReactDOM from 'react-dom/client'; 
import {App} from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';

// Імпортуємо 
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook/">
            <App />
          </BrowserRouter>
      </PersistGate>
    </Provider>
    
  </React.StrictMode>,
);

//  basename="/goit-react-hw-08-phonebook/"