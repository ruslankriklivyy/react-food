import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { RootStateProvider } from './store/RootState.Context';

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <RootStateProvider>
      <App />
    </RootStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
