import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context'
import './index.css';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <SpeechProvider appId='14e42522-4450-4268-94ba-f2959328f6b8' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

