import { ColorModeScript, useColorMode } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import theme from './config/theme';

const rooty = () => {
  return (
    <Provider
      store={createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </StrictMode>
    </Provider>
  );
};

root.render(rooty());

// ReactDOM.render(
//   <Provider
//       store={createStore(
//         reducers,
//         window.__REDUX_DEVTOOLS_EXTENSION__ &&
//           window.__REDUX_DEVTOOLS_EXTENSION__()
//       )}
//     >
//       <StrictMode>
//         <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
//         <App />
//       </StrictMode>
//     </Provider>,
//   document.getElementById('root'),
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
